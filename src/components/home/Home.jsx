import React from "react";
import WhatsappButton from "../whatsapp/WhatsappButton";
const Home = () => {
    return(
        <div className="relative w-full flex flex-col items-center">
            <h2 className="flex items-center justify-center nanum-pen-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold z-10 px-4 text-center">REPUBLICA</h2>
            <h1 className="flex items-center justify-center nanum-pen-script text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold z-10 px-4 text-center">Pingado</h1>
            <div className="w-full flex justify-center relative">
                <img 
                    className="w-[90%] sm:w-[50%] md:w-[45%] lg:w-[40%] h-auto object-cover rounded-lg" 
                    src="/home.png" 
                    alt="background" 
                />
                <div className="absolute bottom-0 left-[5%] sm:left-[25%] md:left-[27.5%] lg:left-[30%] w-[90%] sm:w-[50%] md:w-[45%] lg:w-[40%] h-20 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-t 
                rounded-lg from-white to-transparent opacity-60"></div>
            </div>
            <WhatsappButton />
        </div>
    )
}

export default Home;