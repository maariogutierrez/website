import { GithubIcon } from '@mantinex/dev-icons'
import { FaLinkedin } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ActionIcon, Group } from '@mantine/core';
import * as HoverCard from '@radix-ui/react-hover-card';
import './Header.css';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className='header desktop-only'>
        <div className='inner'>
          <HoverCard.Root openDelay={150} closeDelay={150}>
            <HoverCard.Trigger asChild>
              <div className='profile'>
                <img src='https://raw.githubusercontent.com/maariogutierrez/maariogutierrez/main/ascii.svg' />
                <h2 className="header__name">Mario Gutiérrez</h2>
              </div>
            </HoverCard.Trigger>
            <HoverCard.Content className="header-hovercard" sideOffset={12} align="start">
              <div className="header-hovercard__location">
                { (theme === 'dark') ?
                  <img src='media/location.png' alt="Location" /> :
                  <img src='media/location_black.png' alt="Location" />
                }
                <p>Madrid, Spain</p>
              </div>
              <p className="header-hovercard__body">
                I am a <span className="header-hovercard__highlight">data engineer</span> with a passion for building and integrating applications and services that use data to <span className="header-hovercard__highlight">solve problems</span>. I am particularly interested in <span className="header-hovercard__highlight">artificial intelligence</span> and <span className="header-hovercard__highlight">machine learning</span>.
              </p>
              <HoverCard.Arrow className="header-hovercard__arrow" width={16} height={8} />
            </HoverCard.Content>
          </HoverCard.Root>

          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <ActionIcon
              onClick={toggleTheme}
              size="xl"
              variant="default"
              radius="xl"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              className="header-theme-toggle"
            >
              {theme === 'dark' ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://github.com/maariogutierrez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              size="xl"
              variant="default"
              radius="xl"
            >
              <GithubIcon size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/mariogutierrezdelgado/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              size="xl"
              variant="default"
              radius="xl"
            >
              <FaLinkedin size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </div>
      <div className='header mobile-only'>
        <div className='inner'>
          <div className='profile'>
            <img src='https://raw.githubusercontent.com/maariogutierrez/maariogutierrez/main/ascii.svg' />
            <h2 className="header__name">Mario Gutiérrez</h2>
          </div>
          <Group gap="4vw" wrap="nowrap">
            <ActionIcon
              onClick={toggleTheme}
              size="lg"
              variant="default"
              radius="xl"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              className="header-theme-toggle"
            >
              {theme === 'dark' ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
            </ActionIcon>
          </Group>
        </div>
      </div>
    </>
  );
}