import React, { FC, MouseEvent, useCallback, useEffect, useState } from 'react';
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

import './navbar.scss';

type NavbarDesktopProps = {
  menuOpen: boolean;
  pageScrolledDown: boolean;
  onMenuClick: (open: boolean, mobile?: boolean) => void;
  onSiteClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const NavbarMobile: FC<NavbarDesktopProps> = ({ menuOpen, pageScrolledDown, onMenuClick, onSiteClick }) => {
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

  const onBackClick = (event: MouseEvent<HTMLDivElement>) => {
    setAboutOpen(false);
    setCommunityOpen(false);
    setBaseMenuOpen(true);
    onSiteClick(event);
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
              <div className="tf__navbar-dropdown-item" data-target="docs" onClick={onSiteClick} aria-hidden="true">
                <Typography variant="body-text" clickable>
                  Docs
                </Typography>
              </div>
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
              <div className="tf__navbar-dropdown-item" data-target="team" onClick={onSiteClick} aria-hidden="true">
                <Typography variant={activeLink === 'team' ? 'security-card-label' : 'body-text'} clickable>
                  Team
                </Typography>
              </div>
              <div
                className={`tf__navbar-dropdown-item ${
                  activeLink === 'tokenomics' ? 'tf__navbar-dropdown-item-active' : ''
                }`}
                data-target="tokenomics"
                onClick={onSiteClick}
                aria-hidden="true"
              >
                <Typography variant={activeLink === 'tokenomics' ? 'security-card-label' : 'body-text'} clickable>
                  Tokenomics
                </Typography>
              </div>
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
              <div
                className="tf__navbar-dropdown-item"
                data-target="governance"
                onClick={onSiteClick}
                aria-hidden="true"
              >
                <GovernanceIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Governance
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item" data-target="twitter" onClick={onSiteClick} aria-hidden="true">
                <TwitterIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Twitter
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item" data-target="discord" onClick={onSiteClick} aria-hidden="true">
                <DiscordLogo width="20" height="15" />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Discord
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item" data-target="medium" onClick={onSiteClick} aria-hidden="true">
                <MediumIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Medium
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item" data-target="github" onClick={onSiteClick} aria-hidden="true">
                <GitHubIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  GitHub
                </Typography>
              </div>
              <div
                className="tf__navbar-dropdown-item"
                data-target="announcements"
                onClick={onSiteClick}
                aria-hidden="true"
              >
                <TelegramIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Tempus Announcements
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item" data-target="chat" onClick={onSiteClick} aria-hidden="true">
                <TelegramIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Tempus Chat
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item" data-target="chinese" onClick={onSiteClick} aria-hidden="true">
                <TelegramIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Tempus 中文社區
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item" data-target="sers" onClick={onSiteClick} aria-hidden="true">
                <SersIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Sers
                </Typography>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default NavbarMobile;
