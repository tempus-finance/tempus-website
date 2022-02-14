import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button/button';
import ArrowDown from '../icons/arrow-down';
import CrossIcon from '../icons/cross';
import DiscordLogo from '../icons/discordLogo';
import GitHubIcon from '../icons/gitHubIcon';
import GovernanceIcon from '../icons/governanceNavbarIcon';
import MediumIcon from '../icons/mediumIcon';
import MenuIcon from '../icons/menuIcon';
import SersIcon from '../icons/sersIcon';
import TelegramIcon from '../icons/telegramIcon';
import TwitterIcon from '../icons/twitter-icon';
import Logo from '../logo/logo';
import Spacer from '../spacer/spacer';
import Typography from '../typography/typography';

import './navbar.scss';

const Navbar = () => {
  const history = useHistory();

  const [communityOpen, setCommunityOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [pageScrolledDown, setPageScrolledDown] = useState<boolean>(false);

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

  const onCommunityClick = () => {
    setCommunityOpen((prevValue) => !prevValue);
  };

  const onMenuClick = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  const onTokenClick = () => {
    // window.open('https://www.coingecko.com/en/coins/tempus', '_blank');

    history.push('/token');

    setMenuOpen(false);
  };

  const onDocsClick = () => {
    window.open('http://docs.tempus.finance/', '_blank');
  };

  const onSersClick = () => {
    window.open('https://thesers.com/', '_blank');
  };

  const onLaunchAppClick = () => {
    window.open('https://app.tempus.finance', '_blank');
  };

  const onGovernanceClick = () => {
    window.open('https://forum.tempus.finance/', '_blank');
  };

  const onTwitterClick = () => {
    window.open('https://twitter.com/tempusfinance', '_blank');
  };

  const onDiscordClick = () => {
    window.open('https://discord.com/invite/6gauHECShr', '_blank');
  };

  const onMediumClick = () => {
    window.open('https://medium.com/tempusfinance', '_blank');
  };

  const onGitHubClick = () => {
    window.open('https://github.com/tempus-finance', '_blank');
  };

  const onTelegramAnnouncementsClick = () => {
    window.open('https://t.me/tempusfinance', '_blank');
  };

  const onTelegramChatClick = () => {
    window.open('https://t.me/tempuschat', '_blank');
  };

  const onTelegramChineseClick = () => {
    window.open('https://t.me/joinchat/SaOp74Uqe2BiMGM1', '_blank');
  };

  const onLogoClick = () => {
    history.push('/');

    setMenuOpen(false);
  };

  let containerClasses = 'tf__navbar__container';
  if (pageScrolledDown === true) {
    containerClasses += ' tf__navbar__container-scrolled';
  }

  // In case menu is open on mobile - we want to have white background for nav bar regardless of the scroll
  if (menuOpen === true) {
    containerClasses = 'tf__navbar__container tf__navbar__container-scrolled';
  }

  const textColor = pageScrolledDown ? 'default' : 'inverted';

  let logoColor = pageScrolledDown ? '#222222' : 'white';

  // In case menu is open on mobile - we want to have black logo shown regardless of the scroll position
  if (menuOpen) {
    logoColor = 'black';
  }

  return (
    <div className={containerClasses}>
      <div className="tf__navbar__content">
        <div className="tf__flex-row-center-v">
          <div onClick={onLogoClick} aria-hidden="true" style={{ cursor: 'pointer' }}>
            <Logo fillColor={logoColor} />
          </div>
        </div>
        <div className="tf__navbar-actions-desktop">
          <Typography color={textColor} variant="header-label" onClick={onTokenClick} clickable underline>
            TOKEN
          </Typography>
          <Spacer size={45} type="horizontal" />
          <div
            className="tf__flex-row-center-v tf__navbar-dropdown-label"
            onClick={onCommunityClick}
            aria-hidden="true"
          >
            <Typography color={textColor} variant="header-label" clickable underline>
              COMMUNITY
            </Typography>
            <Spacer size={6} type="horizontal" />
            <ArrowDown fillColor={pageScrolledDown ? '#222222' : '#ffffff'} />
            {communityOpen && (
              <div className="tf__navbar-dropdown">
                <div className="tf__navbar-dropdown-item" onClick={onGovernanceClick} aria-hidden="true">
                  <GovernanceIcon />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    Goverance
                  </Typography>
                </div>
                <div className="tf__navbar-dropdown-item" onClick={onTwitterClick} aria-hidden="true">
                  <TwitterIcon />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    Twitter
                  </Typography>
                </div>
                <div className="tf__navbar-dropdown-item" onClick={onDiscordClick} aria-hidden="true">
                  <DiscordLogo width="20" height="15" />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    Discord
                  </Typography>
                </div>
                <div className="tf__navbar-dropdown-item" onClick={onMediumClick} aria-hidden="true">
                  <MediumIcon />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    Medium
                  </Typography>
                </div>
                <div className="tf__navbar-dropdown-item" onClick={onGitHubClick} aria-hidden="true">
                  <GitHubIcon />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    GitHub
                  </Typography>
                </div>
                <div className="tf__navbar-dropdown-item" onClick={onTelegramAnnouncementsClick} aria-hidden="true">
                  <TelegramIcon />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    Tempus Announcements
                  </Typography>
                </div>
                <div className="tf__navbar-dropdown-item" onClick={onTelegramChatClick} aria-hidden="true">
                  <TelegramIcon />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    Tempus Chat
                  </Typography>
                </div>
                <div className="tf__navbar-dropdown-item" onClick={onTelegramChineseClick} aria-hidden="true">
                  <TelegramIcon />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    Tempus 中文社區
                  </Typography>
                </div>
                <div className="tf__navbar-dropdown-item" onClick={onSersClick} aria-hidden="true">
                  <SersIcon />
                  <Spacer size={10} type="horizontal" />
                  <Typography variant="body-text" clickable>
                    Sers
                  </Typography>
                </div>
              </div>
            )}
          </div>
          {communityOpen && <div className="tf__backdrop" onClick={onCommunityClick} aria-hidden="true" />}
          <Spacer size={45} type="horizontal" />
          <Typography color={textColor} variant="header-label" onClick={onDocsClick} clickable underline>
            DOCS
          </Typography>
          <Spacer size={45} type="horizontal" />
          <Button>
            <Typography
              color={pageScrolledDown ? 'inverted' : 'default'}
              variant="header-label"
              onClick={onLaunchAppClick}
              clickable
            >
              LAUNCH APP
            </Typography>
          </Button>
        </div>
      </div>
      <div className="tf__navbar-actions-mobile">
        <div onClick={onMenuClick} aria-hidden="true">
          {menuOpen ? (
            <CrossIcon color="black" width="18px" />
          ) : (
            <MenuIcon fillColor={pageScrolledDown ? '#222222' : 'white'} />
          )}
        </div>
        {menuOpen && (
          <div className="tf__navbar-menu-mobile">
            <div className="tf__navbar-dropdown-item" onClick={onTokenClick} aria-hidden="true">
              <Typography variant="body-text" clickable>
                Token
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onDocsClick} aria-hidden="true">
              <Typography variant="body-text" clickable>
                Documentation
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onGovernanceClick} aria-hidden="true">
              <GovernanceIcon />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                Goverance
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onTwitterClick} aria-hidden="true">
              <TwitterIcon />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                Twitter
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onDiscordClick} aria-hidden="true">
              <DiscordLogo width="20" height="15" />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                Discord
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onMediumClick} aria-hidden="true">
              <MediumIcon />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                Medium
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onGitHubClick} aria-hidden="true">
              <GitHubIcon />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                GitHub
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onTelegramAnnouncementsClick} aria-hidden="true">
              <TelegramIcon />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                Tempus Announcements
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onTelegramChatClick} aria-hidden="true">
              <TelegramIcon />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                Tempus Chat
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onTelegramChineseClick} aria-hidden="true">
              <TelegramIcon />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                Tempus 中文社區
              </Typography>
            </div>
            <div className="tf__navbar-dropdown-item" onClick={onSersClick} aria-hidden="true">
              <SersIcon />
              <Spacer size={10} type="horizontal" />
              <Typography variant="body-text" clickable>
                Sers
              </Typography>
            </div>
          </div>
        )}
        {menuOpen && <div className="tf__backdrop" onClick={onMenuClick} aria-hidden="true" />}
      </div>
    </div>
  );
};
export default Navbar;
