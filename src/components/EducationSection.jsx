import React from 'react';

const EducationSection = () => {
    const educations = [
        {
            degree: 'Bachelor of Computer Application',
            institution: "Tula's Institute - Dehradun",
            date: '2019 - 2022',
            details: 'Focused on web technologies, data structures, and algorithms, completing several projects demonstrating practical skills in software development.',
            percentage: '74.6%'
        },
        {
            degree: 'Master of Computer Application',
            institution: 'Abes Engineering College - Ghaziabad',
            date: '2022 - 2025',
            details: 'Specialized in advanced computer science concepts, including AI and modern web technologies, to build a strong foundation for a career in software development.',
            percentage: '71.9% '
        }
    ];

    return (
        <section id="education" className="py-16 text-slate-800 dark:text-white relative overflow-hidden">
            <div className="absolute inset-0 custom-grid-bg"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-indigo-500 dark:text-indigo-400">Education</span>
                </h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    {educations.map((edu, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                                <h3 className="text-xl font-bold text-indigo-500 dark:text-indigo-400">{edu.degree}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 flex-shrink-0">{edu.date}</p>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <p className="font-semibold text-slate-700 dark:text-slate-300">{edu.institution}</p>
                                {edu.percentage && (
                                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                                        {edu.percentage}
                                    </span>
                                )}
                            </div>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">{edu.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;