import React, { useState } from 'react';
const ContactSection = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        setTimeout(() => {
            setStatus('Message sent successfully!');
            e.target.reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 text-slate-800 dark:text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 custom-grid-bg"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Contact <span className="text-indigo-500 dark:text-indigo-400">Me</span>
                </h2>
                <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                    <p className="text-center text-slate-600 dark:text-slate-400 mb-6">
                        Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 mb-2">Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2">Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 dark:text-white"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30 w-full md:w-auto">
                                Send Message
                            </button>
                        </div>
                        {status && <p className="text-center mt-4 text-green-500">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};
export default ContactSection