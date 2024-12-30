import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const formErrors = {};
    const email = form.current.user_email.value;
    const name = form.current.user_name.value;
    const message = form.current.message.value;

    if (!name) formErrors.name = "Name is required";
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is not valid";
    }
    if (!message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateInputs()) return;

    // Send the customer's message to your email (first email)
    emailjs
      .sendForm('service_6suxkjk', 'template_y4hnhyc', form.current, {
        publicKey: 'hHDuEviNX-3i98Khh', // Your public key
      })
      .then(
        () => {
          // On success, send a reply back to the customer (second email)
          const customerEmail = form.current.user_email.value; // Get customer's email

          // Send the reply to the customer
          emailjs.send(
            'service_6suxkjk', // Service ID
            'template_a1oigfg', // Template for customer response
            {
              to_email: customerEmail, // Customer's email to send a reply to
              subject: 'Thank You for Contacting Us!',
              message: 'We have received your message and will get back to you soon.',
            },
            {
              publicKey: 'hHDuEviNX-3i98Khh', // Your public key
            }
          ).then(
            () => {
              setStatus('Message sent successfully!');
              form.current.reset(); // Reset the form
            },
            (error) => {
              setStatus('Failed to send response to customer: ' + error.text);
            }
          );
        },
        (error) => {
          setStatus('Failed to send message: ' + error.text);
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Send Message
        </button>
      </form>

      {status && (
        <div className={`mt-4 p-4 rounded-md ${status.includes('failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
