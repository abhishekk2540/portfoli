import React from "react";

const Logo = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className="flex items-center space-x-3 group"
      aria-label="Abhishek Kumar, Homepage"
    >
      <div className="w-10 h-10 bg-indigo-500 dark:bg-indigo-400 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-[-12deg] shadow-lg group-hover:shadow-indigo-500/40">
        <span className="text-white font-bold text-xl tracking-tighter">
          AK
        </span>
      </div>
     
    </a>
  );
};

export default Logo;
