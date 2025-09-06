import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon } from '../Icons';
const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="container mx-auto px-6 text-center text-slate-500 dark:text-slate-400">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/abhishekk2540" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"><GithubIcon className="w-6 h-6 fill-current" /></a>
                    <a href="https://www.linkedin.com/in/abhishek-kumar-3a55211ab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"><LinkedinIcon className="w-6 h-6 fill-current" /></a>
                    <a href="https://x.com/abhishekk25407" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"><TwitterIcon className="w-6 h-6 fill-current" /></a>
                    <a href="https://leetcode.com/u/abhishekkr2540/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"><LeetcodeIcon className="w-6 h-6 fill-current" /></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Abhishek Kumar. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
export default Footer