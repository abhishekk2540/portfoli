import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Arraylog IT Solutions Pvt. Ltd.",
      date: "June 2025 - Present",
      description: [
        "Developed and maintained responsive user interfaces using React and Tailwind CSS.",
        "Collaborated with the design team to implement new features and improve user experience.",
        "Participated in code reviews and contributed to the team's best practices.",
      ],
    },
    {
      title: "Web Development Contributor",
      company: "Open Source Project-Drip UI",
      date: "Jun 2023 - Feb 2022",
      description: [
        "Developed and prebuilt Shadow Button and Animated Button components to the Drip UI Library,improving reusability and speeding up UI integration by 40%",
        "Enabling developers to implement UI elements instantly by copying code snip.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 text-slate-800 dark:text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 custom-grid-bg"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-indigo-500 dark:text-indigo-400">Experience</span>
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 w-1 bg-indigo-200 dark:bg-slate-700 h-full"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 pl-12">
              <div className="absolute -left-0.5 mt-1.5 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-slate-900"></div>
              <p className="text-sm text-indigo-500 dark:text-indigo-400 font-semibold">
                {exp.date}
              </p>
              <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
              <p className="text-md font-semibold text-slate-600 dark:text-slate-300 mb-3">
                {exp.company}
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
