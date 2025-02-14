import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 lg:p-24">
      <section className="w-full text-center py-10 lg:py-20">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Whether you have questions, ideas, or just want to discuss archaeology
          and bias, I’d love to hear from you.
          <br />
          <strong>The Archaeology of Bias</strong> is an ongoing project, and
          open conversations make it better.
        </p>
      </section>

      <section className="w-full max-w-3xl text-left py-6 lg:py-12">
        <h2 className="text-2xl font-semibold mb-4">Who You’re Contacting</h2>
        <p className="text-lg mb-6">
          I’m <strong>Jona Schlegel</strong>, the creator and maintainer of{' '}
          <strong>The Archaeology of Bias</strong>. I’m an archaeologist and
          science communicator with a background in excavation techniques,
          remote sensing, and digital heritage. My work focuses on how we
          document and interpret the past—and how bias plays a role in that
          process.
        </p>
        <p className="text-lg mb-6">
          If you’re reaching out about the project, I handle everything from
          research and writing to website maintenance and design. So, if you
          send a message, it’s me reading it—no automated responses, no
          outsourced teams.
        </p>
      </section>

      <section className="w-full max-w-3xl text-left py-6 lg:py-12">
        <h2 className="text-2xl font-semibold mb-4">How to Reach Me</h2>
        <p className="text-lg mb-6">
          The easiest way to get in touch is by email. Send your message, and
          I’ll do my best to respond within a reasonable timeframe.
        </p>
        <p className="text-lg mb-6">
          <strong>Email:</strong>{' '}
          <a
            href="mailto:archaeoink@jonaschlegel.com"
            className="text-blue-600 underline"
          >
            archaeoink@jonaschlegel.com
          </a>
        </p>
      </section>

      <section className="w-full max-w-3xl text-left py-6 lg:py-12">
        <h2 className="text-2xl font-semibold mb-4">Prefer a Contact Form?</h2>
        <p className="text-lg mb-6">
          You can also use the form below to send a message directly:
        </p>

        <ContactForm />
      </section>
    </main>
  );
}
