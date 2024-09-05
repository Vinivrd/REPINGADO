import React from "react";

const Title = ({ title, title2 }) => {
    return (
        <div>
            <h1 className="flex items-center justify-center nanum-pen-script text-9xl font-bold z-10">{title}</h1>
            <h2 className="flex items-center justify-center text-2xl text-center">{title2}</h2>
        </div>
    );
};

export default Title;