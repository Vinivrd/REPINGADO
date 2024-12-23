import React from "react";
import WhatsappButton from "../whatsapp/WhatsappButton";
const Home = () => {
    return(
        <div className="relative w-full">
            <h2 className="flex items-center justify-center nanum-pen-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold z-10 px-4 text-center">REPUBLICA</h2>
            <h1 className="flex items-center justify-center nanum-pen-script text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold z-10 px-4 text-center">Pingado</h1>
            <img className="w-full" src="https://laracon.net/2022-summer/hero-co.jpg?v=1" alt="background" />
            <WhatsappButton />
        </div>
    )
}

export default Home;