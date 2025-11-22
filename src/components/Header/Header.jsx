import { GithubIcon } from '@mantinex/dev-icons'
import { FaLinkedin } from "react-icons/fa";
import { ActionIcon, Group } from '@mantine/core';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='inner'>
        <h2>Mario Gutiérrez</h2>
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