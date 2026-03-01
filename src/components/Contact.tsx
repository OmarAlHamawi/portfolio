import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus('sending');

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  };

  return (
    <section className="py-24" id="contact">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-gold-500 font-mono mb-4">04. What's Next?</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-12">
          Whether you have a question about my Java experience, want to discuss Spring Boot architecture, 
          or just want to say hi, my inbox is always open.
        </p>

        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4 text-left">
            <input type="text" name="user_name" placeholder="Name" required className="w-full p-4 bg-dark-800 border border-white/10 rounded text-white focus:border-gold-500 outline-none transition-colors" />
            <input type="email" name="user_email" placeholder="Email" required className="w-full p-4 bg-dark-800 border border-white/10 rounded text-white focus:border-gold-500 outline-none transition-colors" />
            <textarea name="message" rows={4} placeholder="Message" required className="w-full p-4 bg-dark-800 border border-white/10 rounded text-white focus:border-gold-500 outline-none transition-colors"></textarea>
            <button disabled={status === 'sending'} className="w-full py-4 bg-gold-500 text-dark-900 font-bold rounded hover:bg-gold-400 transition-colors disabled:opacity-50">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 text-center mt-2">Something went wrong.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;