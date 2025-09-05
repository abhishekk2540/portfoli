import React from 'react';
const AboutSection = () => {
    const skills = ['React', 'Next.js', 'Tailwind CSS', 'Material-UI', 'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Git'];
    
    return (
        <section id="about" className="py-20 text-slate-800 dark:text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 custom-grid-bg"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>

            <style>
                {`
                    .smoke-container span {
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        width: 50px;
                        height: 50px;
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 50%;
                        filter: blur(20px);
                        opacity: 0;
                        pointer-events: none;
                        animation-duration: 3s;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                    }

                    .group:hover .smoke-container span {
                        animation-name: smoke-animation;
                        animation-delay: calc(var(--i) * 0.2s);
                    }

                    @keyframes smoke-animation {
                        0% {
                            transform: translate(-50%, 0) scale(1);
                            opacity: 0;
                        }
                        20% {
                            opacity: 0.7;
                        }
                        100% {
                            transform: translate(calc(var(--i) * 15px - 110px), -250px) scale(4);
                            opacity: 0;
                        }
                    }

                    @keyframes skill-pop-in {
                        from {
                            opacity: 0;
                            transform: translateY(15px) scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }
                    .skill-item { animation: skill-pop-in 0.4s ease-out forwards; opacity: 0; }
                `}
            </style>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-indigo-500 dark:text-indigo-400">Me</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative group">
                            <img 
                                src="/Gemini_Generated_Image_jv1ekejv1ekejv1e.png" 
                                alt="Abhishek Kumar" 
                                className="rounded-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-indigo-500 shadow-xl"
                            />
                            <div className="smoke-container absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                                {[...Array(15)].map((_, i) => (
                                    <span key={i} style={{ '--i': i }}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            I'm a final-year Master's student specializing in building <span className="text-indigo-500 dark:text-indigo-400 font-semibold">intelligent</span>, <span className="text-indigo-500 dark:text-indigo-400 font-semibold">user-centric</span> web solutions where modern development meets <span className="text-indigo-500 dark:text-indigo-400 font-semibold">AI</span>. I am passionate about transforming complex challenges into elegant, high-impact digital experiences.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            Proficient in technologies like <span className="text-indigo-500 dark:text-indigo-400 font-semibold">React</span> and <span className="text-indigo-500 dark:text-indigo-400 font-semibold">Next.js</span>, I am committed to writing clean, scalable code. I am now seeking a full-time opportunity to apply my skills and contribute to a forward-thinking team.
                        </p>
                        <h3 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-400 mb-4">My Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span 
                                    key={skill} 
                                    className="skill-item bg-indigo-100 text-indigo-800 dark:bg-slate-800 dark:text-indigo-300 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
                                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutSection;