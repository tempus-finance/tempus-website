import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../logo/logo';
import NavbarDesktop from './navbarDesktop';
import NavbarMobile from './navbarMobile';

import './navbar.scss';

const Navbar = () => {
  const history = useHistory();

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

  const onSiteClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const site = (event.currentTarget as HTMLDivElement).getAttribute('data-target');
    let url;
    let openIn = '_blank';

    switch (site) {
      case 'governance':
        url = 'https://forum.tempus.finance/';
        break;

      case 'twitter':
        url = 'https://twitter.com/tempusfinance';
        break;

      case 'discord':
        url = 'https://discord.com/invite/6gauHECShr';
        break;

      case 'medium':
        url = 'https://medium.com/tempusfinance';
        break;

      case 'github':
        url = 'https://github.com/tempus-finance';
        break;

      case 'announcements':
        url = 'https://t.me/tempusfinance';
        break;

      case 'chat':
        url = 'https://t.me/tempuschat';
        break;

      case 'chinese':
        url = 'https://t.me/joinchat/SaOp74Uqe2BiMGM1';
        break;

      case 'sers':
        url = 'https://thesers.com/';
        break;

      case 'docs':
        url = 'http://docs.tempus.finance/';
        break;

      case 'home':
        history.push('/');
        openIn = '_self';
        break;

      case 'team':
        history.push('/team');
        setMenuOpen(false);
        setMobileMenuOpen(false);
        openIn = '_self';
        break;

      case 'tokenomics':
        history.push('tokenomics');
        setMenuOpen(false);
        setMobileMenuOpen(false);
        openIn = '_self';
        break;
      default:
    }

    window.open(url, openIn);
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

  const onLogoClick = () => {
    history.push('/');
    setMenuOpen(false);
  };

  return (
    <div className={containerClasses}>
      <div className="tf__navbar__content">
        <div className="tf__flex-row-center-v">
          <div onClick={onLogoClick} aria-hidden="true" style={{ cursor: 'pointer' }}>
            <Logo fillColor={logoColor} />
          </div>
        </div>
        <NavbarDesktop
          menuOpen={menuOpen}
          pageScrolledDown={pageScrolledDown}
          onMenuClick={handleMenuClick}
          onSiteClick={onSiteClick}
        />
        <NavbarMobile
          menuOpen={menuOpen}
          pageScrolledDown={pageScrolledDown}
          onMenuClick={handleMenuClick}
          onSiteClick={onSiteClick}
        />
      </div>
    </div>
  );
};
export default Navbar;
