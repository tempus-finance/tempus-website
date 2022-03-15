import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../common/externalLink';
import ChevronLeft from '../icons/chevronLeft';
import ChevronRight from '../icons/chevronRight';
import CrossIcon from '../icons/cross';
import DiscordLogo from '../icons/discordLogo';
import GitHubIcon from '../icons/gitHubIcon';
import GovernanceIcon from '../icons/governanceNavbarIcon';
import MediumIcon from '../icons/mediumIcon';
import MenuIcon from '../icons/menuIcon';
import SersIcon from '../icons/sersIcon';
import TelegramIcon from '../icons/telegramIcon';
import TwitterIcon from '../icons/twitter-icon';
import Spacer from '../spacer/spacer';
import Typography from '../typography/typography';
import { NavbarLinkTarget } from './navbar';

import './navbar.scss';

type NavbarDesktopProps = {
  menuOpen: boolean;
  pageScrolledDown: boolean;
  onMenuClick: (open: boolean, mobile?: boolean) => void;
  getNavbarLink: (target: NavbarLinkTarget) => string;
};

const NavbarMobile: FC<NavbarDesktopProps> = ({ menuOpen, pageScrolledDown, onMenuClick, getNavbarLink }) => {
  const [baseMenuOpen, setBaseMenuOpen] = useState<boolean>(true);
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [communityOpen, setCommunityOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('');

  const onAboutClick = () => {
    setAboutOpen(true);
    setBaseMenuOpen(false);
  };

  const onCommunityClick = () => {
    setCommunityOpen(true);
    setBaseMenuOpen(false);
  };

  const onBackClick = () => {
    setAboutOpen(false);
    setCommunityOpen(false);
    setBaseMenuOpen(true);
  };

  const handleMenuClick = useCallback(() => {
    const mobile = true;
    onMenuClick(!menuOpen, mobile);
  }, [menuOpen]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/team':
        setActiveLink('team');
        break;

      case '/tokenomics':
        setActiveLink('tokenomics');
        break;

      default:
        setActiveLink('');
    }
  });

  useEffect(() => {
    setAboutOpen(!!activeLink);
    setBaseMenuOpen(!activeLink);
  }, [activeLink]);

  return (
    <div className="tf__navbar-actions-mobile">
      <div onClick={handleMenuClick} aria-hidden="true">
        {menuOpen ? (
          <CrossIcon color="black" width="18px" />
        ) : (
          <MenuIcon fillColor={pageScrolledDown ? '#222222' : 'white'} />
        )}
      </div>
      {menuOpen && (
        <>
          {baseMenuOpen && (
            <div className="tf__navbar-menu-mobile">
              <div className="tf__navbar-dropdown-item" onClick={onAboutClick} aria-hidden="true">
                <Typography variant="body-text" clickable>
                  About
                </Typography>
                <Spacer size={6} type="horizontal" />
                <ChevronRight />
              </div>
              <div className="tf__navbar-dropdown-item" onClick={onCommunityClick} aria-hidden="true">
                <Typography variant="body-text" clickable>
                  Community
                </Typography>
                <Spacer size={6} type="horizontal" />
                <ChevronRight />
              </div>
              <ExternalLink className="tf__navbar-dropdown-item" href={getNavbarLink('docs')} aria-hidden="true">
                <Typography variant="body-text" clickable>
                  Docs
                </Typography>
              </ExternalLink>
            </div>
          )}
          {aboutOpen && (
            <div className="tf__navbar-menu-mobile">
              <div
                className="tf__navbar-dropdown-item tf__navbar-dropdown-highlight"
                data-target="home"
                onClick={onBackClick}
                aria-hidden="true"
              >
                <ChevronLeft />
                <Spacer size={6} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Back
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item tf__navbar-dropdown__subtitle" aria-hidden="true">
                <Typography variant="body-text" color="orange">
                  About
                </Typography>
              </div>
              <Link className="tf__navbar-dropdown-item" to={getNavbarLink('team')} aria-hidden="true">
                <Typography variant={activeLink === 'team' ? 'security-card-label' : 'body-text'} clickable>
                  Team
                </Typography>
                className={`tf__navbar-dropdown-item ${
                  activeLink === 'tokenomics' ? 'tf__navbar-dropdown-item-active' : ''
                }`}
              </Link>
              <Link
                to={getNavbarLink('tokenomics')}
                aria-hidden="true"
              >
                <Typography variant={activeLink === 'tokenomics' ? 'security-card-label' : 'body-text'} clickable>
                  Tokenomics
                </Typography>
              </Link>
            </div>
          )}
          {communityOpen && (
            <div className="tf__navbar-menu-mobile">
              <div
                className="tf__navbar-dropdown-item tf__navbar-dropdown-highlight"
                onClick={onBackClick}
                aria-hidden="true"
              >
                <ChevronLeft />
                <Spacer size={6} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Back
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item tf__navbar-dropdown__subtitle" aria-hidden="true">
                <Typography variant="body-text" color="orange">
                  Community
                </Typography>
              </div>
              <ExternalLink
                className="tf__navbar-dropdown-item"
                href={getNavbarLink('governance')}
                aria-hidden="true"
              >
                <GovernanceIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Governance
                </Typography>
              </ExternalLink>
              <ExternalLink className="tf__navbar-dropdown-item" href={getNavbarLink('twitter')} aria-hidden="true">
                <TwitterIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Twitter
                </Typography>
              </ExternalLink>
              <ExternalLink className="tf__navbar-dropdown-item" href={getNavbarLink('discord')} aria-hidden="true">
                <DiscordLogo width="20" height="15" />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Discord
                </Typography>
              </ExternalLink>
              <ExternalLink className="tf__navbar-dropdown-item" href={getNavbarLink('medium')} aria-hidden="true">
                <MediumIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Medium
                </Typography>
              </ExternalLink>
              <ExternalLink className="tf__navbar-dropdown-item" href={getNavbarLink('github')} aria-hidden="true">
                <GitHubIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  GitHub
                </Typography>
              </ExternalLink>
              <ExternalLink
                className="tf__navbar-dropdown-item"
                href={getNavbarLink('announcements')}
                aria-hidden="true"
              >
                <TelegramIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Tempus Announcements
                </Typography>
              </ExternalLink>
              <ExternalLink className="tf__navbar-dropdown-item" href={getNavbarLink('chat')} aria-hidden="true">
                <TelegramIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Tempus Chat
                </Typography>
              </ExternalLink>
              <ExternalLink className="tf__navbar-dropdown-item" href={getNavbarLink('chinese')} aria-hidden="true">
                <TelegramIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Tempus 中文社區
                </Typography>
              </ExternalLink>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default NavbarMobile;
