import { useState } from 'react';
import { GithubIcon } from '@mantinex/dev-icons'
import { FaLinkedin } from "react-icons/fa";
import { ActionIcon, Button, Group, Popover, Stack, Text } from '@mantine/core';
import './Footer.css';

const CV_FILES = {
  en: '/cv/mario_gutierrez_cv.pdf',
  es: '/cv/mario_gutierrez_cv_spa.pdf',
};

export default function Footer() {
  const [popoverOpened, setPopoverOpened] = useState(false);

  const handleDownload = (lang) => {
    const filePath = CV_FILES[lang];
    if (!filePath) return;

    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setPopoverOpened(false);
  };

  return (
    <div className='footer'>
      <div className='inner'>
        <h2>Mario Gutiérrez</h2>
        <Popover
          opened={popoverOpened}
          onChange={setPopoverOpened}
          width={220}
          position="top"
          withArrow
          shadow="md"
          classNames={{
            dropdown: 'footer__popover',
            arrow: 'footer__popover-arrow',
          }}
        >
          <Popover.Target>
            <button
              type="button"
              className="footer__download-btn"
              onClick={() => setPopoverOpened((o) => !o)}
            >
              Download my CV
            </button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm" fw={600} className="footer__popover-title">
              Choose language
            </Text>
            <Stack gap="xs" mt="xs">
              <Button
                variant="light"
                size="xs"
                className="footer__popover-btn"
                onClick={() => handleDownload('en')}
              >
                English
              </Button>
              <Button
                variant="light"
                size="xs"
                className="footer__popover-btn"
                onClick={() => handleDownload('es')}
              >
                Spanish
              </Button>
            </Stack>
          </Popover.Dropdown>
        </Popover>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
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
  );
}