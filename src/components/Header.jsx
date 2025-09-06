import  { useState, useEffect } from 'react';
import { MenuIcon, MoonIcon, SunIcon, XIcon } from '../Icons';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'ABOUT' },
        { href: '#experience', label: 'EXPERIENCE' },
        { href: '#education', label: 'EDUCATION' },
        { href: '#projects', label: 'PROJECTS' },
        { href: '#contact', label: 'CONTACT' },
    ];

    const resumeLink = { href: '/UpdatedCV2[1].pdf', label: 'RESUME CV', download: 'Abhishek_Kumar_Resume.pdf' };

    const scrollTo = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollTo(e, link.href)}
                            className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={resumeLink.href}
                        download={resumeLink.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30 text-sm"
                    >
                        {resumeLink.label}
                    </a>
                </nav>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-white focus:outline-none">
                        {isOpen ? <XIcon className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/>}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white dark:bg-slate-900/90 backdrop-blur-sm`}>
                <nav className="flex flex-col items-center py-4 space-y-4">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollTo(e, link.href)}
                            className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300 font-medium text-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={resumeLink.href}
                        download={resumeLink.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30 w-auto"
                    >
                        {resumeLink.label}
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;