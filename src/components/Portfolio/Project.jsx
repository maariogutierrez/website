import { Avatar, Card, Group, Image, Text } from '@mantine/core';
import './Project.css';

function Project(props) {
  return (
    <Card withBorder radius="md" p={0} className='card'>
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-link">
            <Image
                src={props.image}
                className='image'
            />
        </a>
        <div className='body'>
            <Text className="tag" tt="uppercase" c="dimmed" fw={700}>
                {props.tag}
            </Text>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <Text className='title' mt="xs" mb="md">
                    {props.title}
                </Text>
            </a>
            <Group wrap="nowrap" gap="xs">
                <Group gap="xs" wrap="nowrap">
                    <Avatar
                        size={20}
                        src="https://avatars.githubusercontent.com/u/68995086?s=400&u=95c793a5d170863afe7dd25cfc5fd09839b78da4&v=4"
                    />
                    <a href={'https://github.com/maariogutierrez'} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Text className="author">Mario Gutiérrez</Text>
                    </a>
                </Group>
                <Text size="xs" c="dimmed">
                •
                </Text>
                <Text className="date" c="dimmed">
                {props.date}
                </Text>
            </Group>
        </div>
    </Card>
  )
}

export default Project
