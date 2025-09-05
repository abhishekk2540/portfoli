import React, { useState } from 'react';
import { PaperPlaneIcon } from '../Icons';

const HeroSection = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const scrollToContact = (e) => {
        e.preventDefault();
        if (isAnimating) {
            return;
        }

        setIsAnimating(true);

        // Wait for the animation to complete before scrolling
        setTimeout(() => {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            setIsAnimating(false);
        }, 2000);
    };

    return (
        <section id="home" className="min-h-screen  flex items-center text-slate-800 dark:text-white relative overflow-hidden">
             {/* Background decoration */}
            <div className="absolute inset-0 custom-grid-bg"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>

            {/* Animation Overlay */}
            {isAnimating && (
                <div className="fixed inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-[100] flex flex-col justify-center items-center overflow-hidden pointer-events-none">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <PaperPlaneIcon className="w-24 h-24 text-indigo-500 email-animation" />
                    </div>
                    <p className="absolute bottom-20 text-xl font-semibold text-indigo-500 animate-pulse">Connecting...</p>
                </div>
            )}
            
            <div className="container mx-auto px-4 text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-2 leading-tight">
                    Hi, I'm <span className="inline-block text-indigo-500 dark:text-indigo-400 transition-all duration-300 ease-in-out hover:scale-105 hover:-rotate-2">Abhishek Kumar.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    I build intelligent and beautiful web applications. As a final-year Master's student, I blend modern frontend technologies with a passion for AI to create seamless user experiences.
                </p>
                <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    <a href="#contact" onClick={scrollToContact} className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30">
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};
export default HeroSection