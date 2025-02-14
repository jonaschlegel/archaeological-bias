export default function Contact() {
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
        <h2 className="text-2xl font-semibold mb-4">Why Reach Out?</h2>
        <p className="text-lg mb-6">
          There are many reasons to get in touch, but here are a few common
          ones:
        </p>
        <ul className="list-disc pl-6 text-lg mb-6">
          <li>
            <strong>Collaboration & Contributions:</strong> Have a case study,
            research insight, or an idea for the project?
          </li>
          <li>
            <strong>Questions About Bias:</strong> Curious about how bias shapes
            archaeology or need resources?
          </li>
          <li>
            <strong>Teaching & Education:</strong> Looking for ways to integrate
            bias discussions into courses?
          </li>
          <li>
            <strong>Media & Talks:</strong> Want to discuss bias in archaeology
            in a talk, podcast, or article?
          </li>
          <li>
            <strong>General Interest:</strong> Just want to chat about
            archaeology, history, or the project? That’s great too!
          </li>
        </ul>
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

        <form className="w-full max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium mb-2 text-black"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-lg text-black"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium mb-2 text-black"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-lg text-black"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium mb-2 text-black"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border rounded-lg text-black"
              rows={5}
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
