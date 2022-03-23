import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Announcement from '../announcement/announcement';
import Logo from '../logo/logo';
import NavbarDesktop from './navbarDesktop';
import NavbarMobile from './navbarMobile';

import './navbar.scss';

interface NavbarProps {
  showAnnouncement?: boolean;
}

const Navbar = ({ showAnnouncement = false }: NavbarProps) => {
  const [pageScrolledDown, setPageScrolledDown] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setPageScrolledDown(true);
    } else {
      setPageScrolledDown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleMenuClick = (open: boolean, mobile?: boolean) => {
    setMenuOpen(open);

    if (mobile) {
      setMobileMenuOpen(open);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
  };

  let logoColor;
  let containerClasses = 'tf__navbar__container';

  // In case menu is open on mobile - we want to have white background for nav bar regardless of the scroll
  if (pageScrolledDown === true || mobileMenuOpen === true) {
    containerClasses += ' tf__navbar__container-scrolled';
    logoColor = '#222222';
  } else {
    containerClasses = 'tf__navbar__container';
    logoColor = 'white';
  }

  return (
    <div className={containerClasses}>
      {showAnnouncement && !pageScrolledDown && <Announcement />}
      <div className="tf__navbar__content">
        <div className="tf__flex-row-center-v">
          <Link to="/" onClick={closeMenu} aria-hidden="true">
            <Logo fillColor={logoColor} />
          </Link>
        </div>
        <NavbarDesktop menuOpen={menuOpen} pageScrolledDown={pageScrolledDown} onMenuClick={handleMenuClick} />
        <NavbarMobile
          menuOpen={menuOpen}
          pageScrolledDown={pageScrolledDown}
          onMenuClick={handleMenuClick}
          closeMenu={closeMenu}
        />
      </div>
    </div>
  );
};
export default Navbar;
