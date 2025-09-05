import React from 'react';
const ProjectsSection = () => {
    const projects = [
        {
            title: 'Mentor AI',
            description: 'Led the development of an AI-powered career mentorship platform using Next.js and React. Integrated secure Clerk authentication and Google Generative AI for personalized assessments and mock interviews.',
            tech: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'Redux Toolkit'],
            liveUrl: 'https://mentor-ai-lyart.vercel.app/',
            repoUrl: 'https://github.com/abhishekk2540/mentor-AI',
            imageUrl: '/Screenshot (91).png'
        },
        {
            title: 'Sentence Construction Tool',
            description: 'Developed an interactive sentence construction web app with blank-filling mechanics, a 30-second countdown timer, and a real-time score tracking system with instant feedback.',
            tech: ['React', 'Tailwind CSS', 'Redux Toolkit'],
            liveUrl: 'https://sentance-construction-tool.vercel.app/',
            repoUrl: 'https://github.com/abhishekk2540/sentance-construction-tool',
            imageUrl: '/Screenshot (92).png'
        },
        {
            title: 'Real Time Crypto Prices Tracker',
            description: 'Developed a full-stack MERN application to track real-time cryptocurrency prices. Implemented a RESTful API for data fetching and user authentication for a personalized experience.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            liveUrl: 'https://vercel.com/coderiserrs-projects/real-time-crypto-price-tracker',
            repoUrl: 'https://github.com/abhishekk2540/Real-Time-Crypto-Price-Tracker',
            imageUrl: '/Screenshot (93).png'
        },
        {
            title: 'Calculator',
            description: 'A responsive and functional calculator application built with fundamental web technologies, providing a clean interface for basic arithmetic operations.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            liveUrl: 'https://calculator-two-rho-34.vercel.app/',
            repoUrl: 'https://github.com/abhishekk2540/Calculator',
            imageUrl: '/Screenshot (94).png'
        },
        {
            title: 'Conference Expense Planner',
            description: 'A responsive application for planning and managing conference expenses, built with React and styled with a combination of Tailwind CSS and Material-UI for a modern user interface.',
            tech: ['React', 'Tailwind CSS', 'MUI'],
            liveUrl: 'https://vercel.com/coderiserrs-projects/conference-event-planner',
            repoUrl: 'https://github.com/abhishekk2540/Conference-Event-planner',
            imageUrl: '/Screenshot (95).png'
        },
        {
            title: 'GymBuddy',
            description: 'A web application to help users track their workouts and fitness progress, built with a focus on a simple and intuitive user interface using core web technologies.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            liveUrl: '#', // TODO: Replace with actual live URL
            repoUrl: 'https://github.com/abhishekk2540/GymBuddy',
            imageUrl: '/Screenshot (97).png'
        },
    ];

    return (
        <section id="projects" className="py-20 text-slate-800 dark:text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 custom-grid-bg"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-indigo-500 dark:text-indigo-400">Projects</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg group border border-slate-200 dark:border-slate-700">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-indigo-500 dark:text-indigo-400">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="bg-slate-200 text-indigo-700 dark:bg-slate-700 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                                    ))}
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-semibold">Live Demo</a>
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-semibold">GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ProjectsSection;