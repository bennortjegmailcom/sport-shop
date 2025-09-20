import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const ContactPage: React.FC = () => {
    const { state } = useAppContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, message });
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSubmitted(false), 5000);
    };

    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(state.contactInfo.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
                <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
            </div>
            <div className="space-y-3 text-gray-700">
                <p><strong>Address:</strong> {state.contactInfo.address}</p>
                <p><strong>Phone:</strong> {state.contactInfo.phone}</p>
                <p><strong>Email:</strong> <a href={`mailto:${state.contactInfo.email}`} className="text-yellow-600 hover:underline">{state.contactInfo.email}</a></p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Location of Leo Cycles"
                ></iframe>
            </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        {submitted ? (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                <p className="font-bold">Thank you!</p>
                <p>Your message has been sent successfully.</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input 
                        type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    />
                </div>
                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                    <input 
                        type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    />
                </div>
                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                        id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                        rows={5} required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                    Submit Message
                </button>
            </form>
        )}
        </div>
    </div>
  );
};

export default ContactPage;