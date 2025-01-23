import React, { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileSlides = [
        "/assets/casa/celular/P1.jpg",
        "/assets/casa/celular/P2.jpg",
        "/assets/casa/celular/P3.jpg",
        "/assets/casa/celular/P4.jpg",
        "/assets/casa/celular/P5.jpg",
        "/assets/casa/celular/P6.jpg",
        "/assets/casa/celular/P7.jpg",
        "/assets/casa/celular/P8.jpg",
    ];

    const desktopSlides = [
        "/assets/casa/pc/D1.jpg",
        "/assets/casa/pc/D2.jpg",
        "/assets/casa/pc/D3.jpg",
        "/assets/casa/pc/D4.jpg",
        "/assets/casa/pc/D5.jpg",
        "/assets/casa/pc/D6.jpg",
        "/assets/casa/pc/D7.jpg",
    ];

    const slides = isMobile ? mobileSlides : desktopSlides;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-[90%] md:w-[80%] lg:w-[70%] m-auto pt-11">
            <div className="overflow-hidden rounded-xl relative">
                <motion.div 
                    className="flex"
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`Slide ${index}`}
                            className="w-full flex-shrink-0 h-[300px] md:h-[600px] lg:h-[700px] object-cover"
                        />
                    ))}
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

                <div className="absolute top-0 h-full w-full flex justify-between items-center px-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200"
                    >
                        <FiArrowLeft className="text-2xl" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200"
                    >
                        <FiArrowRight className="text-2xl" />
                    </motion.button>
                </div>
            </div>

            {/* Pontos de navegação */}
            <div className="flex justify-center mt-4 gap-2">
                {slides.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToSlide(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'bg-gray-800 w-4' 
                                : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
