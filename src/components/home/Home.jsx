import React, { useState, useEffect, useRef } from "react";
import WhatsappButton from "../whatsapp/WhatsappButton";
import { motion } from "framer-motion";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);
    
    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;
        
        // Verifica se a imagem já está carregada (caso de cache)
        if (img.complete) {
            setIsLoaded(true);
            return;
        }
        
        // Fallback por timeout (5 segundos)
        const timeout = setTimeout(() => {
            if (!isLoaded && img.offsetWidth > 0) {
                setIsLoaded(true);
            }
        }, 5000);
        
        return () => clearTimeout(timeout);
    }, []);
    
    return(
        <div className="relative w-full flex flex-col items-center">
            <h2 className="flex items-center justify-center nanum-pen-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold z-10 px-4 text-center">REPUBLICA</h2>
            <h1 className="flex items-center justify-center nanum-pen-script text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold z-10 px-4 text-center">Pingado</h1>
            <div className="w-full flex justify-center relative">
                {!isLoaded && (
                    <div className="w-[90%] sm:w-[50%] md:w-[45%] lg:w-[40%] h-[300px] bg-gray-200 animate-pulse rounded-lg"></div>
                )}
                <motion.img 
                    ref={imgRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ 
                        duration: 1.2,
                        ease: "easeInOut"
                    }}
                    className="w-[90%] sm:w-[50%] md:w-[45%] lg:w-[40%] h-auto object-cover rounded-lg" 
                    src="/home.png" 
                    alt="background" 
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsLoaded(true)} // Fallback se houver erro
                />
                <div className="absolute bottom-0 left-[5%] sm:left-[25%] md:left-[27.5%] lg:left-[30%] w-[90%] sm:w-[50%] md:w-[45%] lg:w-[40%] h-20 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-t 
                rounded-lg from-white to-transparent opacity-60"></div>
            </div>
            <WhatsappButton />
        </div>
    )
}

export default Home;