import React from "react";

const Title = ({ title, title2 }) => {
    return (
        <div className="w-full px-4">
            <h1 className="flex items-center justify-center nanum-pen-script text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold z-10 text-center">{title}</h1>
            <h2 className="flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-[90%] sm:max-w-4xl mx-auto">{title2}</h2>
        </div>
    );
};

export default Title;