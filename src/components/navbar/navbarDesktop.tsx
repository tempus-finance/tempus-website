import React, { FC, MouseEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import ExternalLink from '../common/externalLink';
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
import { NavbarLinkTarget } from './navbar';

import './navbar.scss';

type NavbarDesktopProps = {
  menuOpen: boolean;
  pageScrolledDown: boolean;
  onMenuClick: (open: boolean) => void;
  getNavbarLink: (target: NavbarLinkTarget) => string;
};

const NavbarDesktop: FC<NavbarDesktopProps> = ({ menuOpen, pageScrolledDown, onMenuClick, getNavbarLink }) => {
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
              <Link
                className="tf__navbar-dropdown-item"
                to={getNavbarLink('tokenomics')}
                aria-hidden="true"
              >
                <Typography variant="body-text" clickable>
                  Tokenomics
                </Typography>
              </Link>
              <Link
                className="tf__navbar-dropdown-item"
                to={getNavbarLink('team')}
                aria-hidden="true"
              >
                <Typography variant="body-text" clickable>
                  Team
                </Typography>
              </Link>
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
              <ExternalLink
                className="tf__navbar-dropdown-item"
                href={getNavbarLink('twitter')}
                aria-hidden="true"
              >
                <TwitterIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Twitter
                </Typography>
              </ExternalLink>
              <ExternalLink
                className="tf__navbar-dropdown-item"
                href={getNavbarLink('discord')}
                aria-hidden="true"
              >
                <DiscordLogo width="20" height="15" />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Discord
                </Typography>
              </ExternalLink>
              <ExternalLink
                className="tf__navbar-dropdown-item"
                href={getNavbarLink('medium')}
                aria-hidden="true"
              >
                <MediumIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Medium
                </Typography>
              </ExternalLink>
              <ExternalLink
                className="tf__navbar-dropdown-item"
                href={getNavbarLink('github')}
                aria-hidden="true"
              >
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
              <ExternalLink
                className="tf__navbar-dropdown-item"
                href={getNavbarLink('chat')}
                aria-hidden="true"
              >
                <TelegramIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Tempus Chat
                </Typography>
              </ExternalLink>
              <ExternalLink
                className="tf__navbar-dropdown-item"
                href={getNavbarLink('chinese')}
                aria-hidden="true"
              >
                <TelegramIcon />
                <Spacer size={10} type="horizontal" />
                <Typography variant="body-text" clickable>
                  Tempus 中文社區
                </Typography>
              </ExternalLink>
            </div>
          )}
        </div>
        {communityOpen && <div className="tf__backdrop" onClick={onCommunityClick} aria-hidden="true" />}
        <Spacer size={45} type="horizontal" />
        <ExternalLink className="tf__navbar-item" href={getNavbarLink('docs')}>
          <Typography color={textColor} variant="header-label" underline clickable>
            DOCS
          </Typography>
        </ExternalLink>
        <Spacer size={45} type="horizontal" />
        <Button>
          <ExternalLink href="https://app.tempus.finance">
            <Typography color={pageScrolledDown ? 'inverted' : 'default'} variant="header-label" clickable>
              LAUNCH APP
            </Typography>
          </ExternalLink>
        </Button>
      </div>
      {menuOpen && <div className="tf__backdrop" onClick={handleMenuClick} aria-hidden="true" />}
    </>
  );
};
export default NavbarDesktop;
