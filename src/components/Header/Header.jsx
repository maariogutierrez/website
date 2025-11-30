import { GithubIcon } from '@mantinex/dev-icons'
import { FaLinkedin } from "react-icons/fa";
import { ActionIcon, Group } from '@mantine/core';
import * as HoverCard from '@radix-ui/react-hover-card';
import './Header.css';
import { useLanguage } from '../../context/LanguageContext';
import { toast } from 'sonner';

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  return (
    <>
      <div className='header desktop-only'>
        <div className='inner'>
            { (language === 'en') ?
            <HoverCard.Root openDelay={150} closeDelay={150}>
              <HoverCard.Trigger asChild>
                <div className='profile'>
                  <img src='media/favicon-192x192.png' />
                  <h2 className="header__name">Mario Gutiérrez</h2>
                </div>
              </HoverCard.Trigger>
              <HoverCard.Content className="header-hovercard" sideOffset={12} align="start">
                <div className="header-hovercard__location">
                  <img src="media/location.png" alt="Location" />
                  <p>Madrid, Spain</p>
                </div>
                <p className="header-hovercard__body">
                  I am a <span className="header-hovercard__highlight">data engineer</span> with a passion for building and integrating applications and services that use data to <span className="header-hovercard__highlight">solve problems</span>. I am particularly interested in <span className="header-hovercard__highlight">artificial intelligence</span> and <span className="header-hovercard__highlight">machine learning</span>.
                </p>
                <HoverCard.Arrow className="header-hovercard__arrow" width={16} height={8} />
              </HoverCard.Content> 
            </HoverCard.Root>
            :
            <HoverCard.Root openDelay={150} closeDelay={150}>
              <HoverCard.Trigger asChild>
                <div className='profile'>
                  <img src='media/favicon-192x192.png' />
                  <h2 className="header__name">Mario Gutiérrez</h2>
                </div>
              </HoverCard.Trigger>
              <HoverCard.Content className="header-hovercard" sideOffset={12} align="start">
                <div className="header-hovercard__location">
                  <img src="media/location.png" alt="Location" />
                  <p>Madrid, Spain</p>
                </div>
                <p className="header-hovercard__body">
                  Soy un <span className="header-hovercard__highlight">ingeniero de datos</span> con pasión por construir e integrar aplicaciones y servicios que utilizan datos para <span className="header-hovercard__highlight">resolver problemas</span>. Estoy particularmente interesado en la <span className="header-hovercard__highlight">inteligencia artificial</span> y el <span className="header-hovercard__highlight">aprendizaje automático</span>.
                </p>
                <HoverCard.Arrow className="header-hovercard__arrow" width={16} height={8} />
              </HoverCard.Content> 
            </HoverCard.Root>
            }
            
          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <ActionIcon
              onClick={() => {
                changeLanguage(language === 'en' ? 'es' : 'en');
                toast.info(language === 'en' ? 'Idioma cambiado a español' : 'Language changed to English');
              }}
              size="lg"
              variant="default"
              radius="xl"
              aria-label="Change Language"
              title="Change Language"
            >
              <img 
                src={language === 'en' ? "https://flagcdn.com/w40/es.png" : "https://flagcdn.com/w40/gb.png"}
                className="header-flag"
                alt={language === 'en' ? "Spanish" : "English"}
              />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://github.com/maariogutierrez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              size="lg"
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
              size="lg"
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
            <img src='media/favicon-192x192.png' />
            <h2 className="header__name">Mario Gutiérrez</h2>
          </div>
          <ActionIcon
            onClick={() => {
              changeLanguage(language === 'en' ? 'es' : 'en');
              toast.info(language === 'en' ? 'Idioma cambiado a español' : 'Language changed to English');
            }}
            size="lg"
            variant="default"
            radius="xl"
            aria-label="Change Language"
            title="Change Language"
          >
            <img 
              src={language === 'en' ? "https://flagcdn.com/w40/es.png" : "https://flagcdn.com/w40/gb.png"}
              className="header-flag"
              alt={language === 'en' ? "Spanish" : "English"}
            />
          </ActionIcon>
        </div>
      </div>
    </>
  );
}