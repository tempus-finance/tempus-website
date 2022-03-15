import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import NavbarDesktop from './navbarDesktop';
import NavbarMobile from './navbarMobile';

import './navbar.scss';

export type NavbarLinkTarget = 'announcements'
  | 'chat'
  | 'chinese'
  | 'discord'
  | 'docs'
  | 'github'
  | 'governance'
  | 'home'
  | 'medium'
  | 'team'
  | 'tokenomics'
  | 'twitter';

const navbarLinks = {
  announcements: 'https://t.me/tempusfinance',
  chat: 'https://t.me/tempuschat',
  chinese: 'https://t.me/joinchat/SaOp74Uqe2BiMGM1',
  discord: 'https://discord.com/invite/6gauHECShr',
  docs: 'http://docs.tempus.finance/',
  github: 'https://github.com/tempus-finance',
  governance: 'https://forum.tempus.finance/',
  home: '/',
  medium: 'https://medium.com/tempusfinance',
  team: '/team',
  tokenomics: '/tokenomics',
  twitter: 'https://twitter.com/tempusfinance',
};

function getNavbarLink(target: NavbarLinkTarget): string {
  return navbarLinks[target];
}

const Navbar = () => {
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
      <div className="tf__navbar__content">
        <div className="tf__flex-row-center-v">
          <Link to={getNavbarLink('home')} aria-hidden="true">
            <Logo fillColor={logoColor} />
          </Link>
        </div>
        <NavbarDesktop
          menuOpen={menuOpen}
          pageScrolledDown={pageScrolledDown}
          onMenuClick={handleMenuClick}
          getNavbarLink={getNavbarLink}
        />
        <NavbarMobile
          menuOpen={menuOpen}
          pageScrolledDown={pageScrolledDown}
          onMenuClick={handleMenuClick}
          getNavbarLink={getNavbarLink}
        />
      </div>
    </div>
  );
};
export default Navbar;
