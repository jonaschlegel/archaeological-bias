'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 border rounded-lg text-black"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border rounded-lg text-black"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-lg font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-3 border rounded-lg text-black"
          rows={5}
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Send Message
      </button>

      {status === 'success' && (
        <p className="text-green-600 mt-4 text-lg">
          Thank you for reaching out! I'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-4 text-lg">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}
