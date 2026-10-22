import { Button, Group, SimpleGrid, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { toast } from 'sonner';
import './GetInTouch.css'

export default function GetInTouch() {
  const [isSending, setIsSending] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Enter your name' : null),
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Enter a valid email address, like name@example.com'),
      subject: (value) => (value.trim().length === 0 ? 'Add a subject' : null),
      message: (value) => (value.trim().length === 0 ? 'Write a message' : null),
    },
  });

  const handleSubmit = async (_, event) => {
    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? `Status ${response.status}`);
      }

      toast.success('Message sent. I\'ll reply to the email you gave.');
      form.reset();
    } catch (error) {
      console.error('Failed to send contact form:', error);
      toast.error('Message not sent. Check your connection and try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className='section' aria-labelledby='getInTouchTitle'>
      <h2 id='getInTouchTitle' className='section__title'>Get in touch</h2>
      <form
        id="getInTouch"
        className='section__body'
        noValidate
        onSubmit={form.onSubmit(handleSubmit)}
      >
      <input type="hidden" name="access_key" value="db5a8c9a-b75d-4320-8394-a1b9f72a5816" />
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Name"
          name="name"
          autoComplete="name"
          variant="filled"
          className='subtitle'
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          variant="filled"
          className='subtitle'
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        mt="md"
        name="subject"
        variant="filled"
        className='subtitle'
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        className='subtitle'
        {...form.getInputProps('message')}
      />

        <Group justify="flex-start" mt="xl">
          <Button type="submit" size="md" className='button' loading={isSending}>
            Send message
          </Button>
        </Group>
      </form>
    </section>
  );
}