import { Button, Group, SimpleGrid, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { toast } from 'sonner';
import './GetInTouch.css'

export default function GetInTouch() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
      message: (value) => value.trim().length === 0,
    },
  });

  return (
    <section className='section' aria-labelledby='getInTouchTitle'>
      <h2 id='getInTouchTitle' className='section__title'>Get in touch</h2>
      <iframe name="fm-target" style={{ display: 'none' }} title="hidden-submit-target" />

      <form
        id="getInTouch"
        className='section__body'
        action="https://api.web3forms.com/submit"
        method="POST"
        target="fm-target"
        onSubmit={form.onSubmit((_, e) => {
          toast.success('Message sent successfully');
          e?.currentTarget.submit();
          form.reset();
        })}
      >
      <input type="hidden" name="access_key" value="db5a8c9a-b75d-4320-8394-a1b9f72a5816" />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          className='subtitle'
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          className='subtitle'
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        className='subtitle'
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        className='subtitle'
        {...form.getInputProps('message')}
      />

        <Group justify="flex-start" mt="xl">
          <Button type="submit" size="md" className='button'>
            Send message
          </Button>
        </Group>
      </form>
    </section>
  );
}