import React, { FC, MouseEvent, useCallback, useState } from 'react';
import Button from '../button/button';
import ArrowDown from '../icons/arrow-down';
import DiscordLogo from '../icons/discordLogo';
import GitHubIcon from '../icons/gitHubIcon';
import GovernanceIcon from '../icons/governanceNavbarIcon';
import MediumIcon from '../icons/mediumIcon';
import SersIcon from '../icons/sersIcon';
import TelegramIcon from '../icons/telegramIcon';
import TwitterIcon from '../icons/twitter-icon';
import Spacer from '../spacer/spacer';
import Typography from '../typography/typography';

import './navbar.scss';

type NavbarDesktopProps = {
  menuOpen: boolean;
  pageScrolledDown: boolean;
  onMenuClick: (open: boolean) => void;
  onSiteClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const NavbarDesktop: FC<NavbarDesktopProps> = ({ menuOpen, pageScrolledDown, onMenuClick, onSiteClick }) => {
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [communityOpen, setCommunityOpen] = useState<boolean>(false);

  const onAboutClick = () => {
    setAboutOpen((prevValue) => !prevValue);
  };

  const onCommunityClick = () => {
    setCommunityOpen((prevValue) => !prevValue);
  };

  const handleMenuClick = useCallback(() => {
    onMenuClick(!menuOpen);
  }, []);

  const onLaunchAppClick = () => {
    window.open('https://app.tempus.finance', '_blank');
  };

  const textColor = pageScrolledDown ? 'default' : 'inverted';

  return (
    <>
      <div className="tf__navbar-actions-desktop">
        <div className="tf__flex-row-center-v tf__navbar-dropdown-label" onClick={onAboutClick} aria-hidden="true">
          <Typography color={textColor} variant="header-label" clickable underline>
            ABOUT
          </Typography>
          <Spacer size={6} type="horizontal" />
          <ArrowDown fillColor={pageScrolledDown ? '#222222' : '#ffffff'} />
          {aboutOpen && (
            <div className="tf__navbar-dropdown">
              <div
                className="tf__navbar-dropdown-item"
                data-target="tokenomics"
                onClick={onSiteClick}
                aria-hidden="true"
              >
                <Typography variant="body-text" clickable>
                  Tokenomics
                </Typography>
              </div>
              <div className="tf__navbar-dropdown-item" data-target="team" onClick={onSiteClick} aria-hidden="true">
                <Typography variant="body-text" clickable>
                  Team
                </Typography>
              </div>
            </div>
          )}
        </div>
        {aboutOpen && <div className="tf__backdrop" onClick={onAboutClick} aria-hidden="true" />}
        <Spacer size={45} type="horizontal" />
        <div className="tf__flex-row-center-v tf__navbar-dropdown-label" onClick={onCommunityClick} aria-hidden="true">
          <Typography color={textColor} variant="header-label" clickable underline>
            COMMUNITY
          </Typography>
          <Spacer size={6} type="horizontal" />
          <ArrowDown fillColor={pageScrolledDown ? '#222222' : '#ffffff'} />
          {communityOpen && (
            <div className="tf__navbar-dropdown">
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
        </div>
        {communityOpen && <div className="tf__backdrop" onClick={onCommunityClick} aria-hidden="true" />}
        <Spacer size={45} type="horizontal" />
        <div data-target="docs" onClick={onSiteClick}>
          <Typography color={textColor} variant="header-label" clickable underline>
            DOCS
          </Typography>
        </div>
        <Spacer size={45} type="horizontal" />
        <Button onClick={onLaunchAppClick}>
          <Typography color={pageScrolledDown ? 'inverted' : 'default'} variant="header-label" clickable>
            LAUNCH APP
          </Typography>
        </Button>
      </div>
      {menuOpen && <div className="tf__backdrop" onClick={handleMenuClick} aria-hidden="true" />}
    </>
  );
};
export default NavbarDesktop;
