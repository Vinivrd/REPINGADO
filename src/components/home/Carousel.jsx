import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        "https://img.freepik.com/fotos-gratis/pico-de-montanha-nevado-em-um-dia-nublado_181624-56144.jpg?w=1380&t=st=1722803688~exp=1722804288~hmac=9305d699066503b6d286dc19264a9f8013b3e8d08685d8bf094afc2d21ecfd84",
        "https://img.freepik.com/fotos-gratis/pico-de-montanha-nevado-em-um-dia-nublado_181624-56144.jpg?w=1380&t=st=1722803688~exp=1722804288~hmac=9305d699066503b6d286dc19264a9f8013b3e8d08685d8bf094afc2d21ecfd84",
        "https://img.freepik.com/fotos-gratis/pico-de-montanha-nevado-em-um-dia-nublado_181624-56144.jpg?w=1380&t=st=1722803688~exp=1722804288~hmac=9305d699066503b6d286dc19264a9f8013b3e8d08685d8bf094afc2d21ecfd84",
        "https://img.freepik.com/fotos-gratis/pico-de-montanha-nevado-em-um-dia-nublado_181624-56144.jpg?w=1380&t=st=1722803688~exp=1722804288~hmac=9305d699066503b6d286dc19264a9f8013b3e8d08685d8bf094afc2d21ecfd84",
        "https://img.freepik.com/fotos-gratis/pico-de-montanha-nevado-em-um-dia-nublado_181624-56144.jpg?w=1380&t=st=1722803688~exp=1722804288~hmac=9305d699066503b6d286dc19264a9f8013b3e8d08685d8bf094afc2d21ecfd84",
        "https://img.freepik.com/fotos-gratis/pico-de-montanha-nevado-em-um-dia-nublado_181624-56144.jpg?w=1380&t=st=1722803688~exp=1722804288~hmac=9305d699066503b6d286dc19264a9f8013b3e8d08685d8bf094afc2d21ecfd84",
        "https://img.freepik.com/fotos-gratis/pico-de-montanha-nevado-em-um-dia-nublado_181624-56144.jpg?w=1380&t=st=1722803688~exp=1722804288~hmac=9305d699066503b6d286dc19264a9f8013b3e8d08685d8bf094afc2d21ecfd84"
    ];

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
        <div className="relative w-[60%] m-auto pt-11">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((s, index) => (
                        <img
                            key={index}
                            src={s}
                            alt={`Slide ${index}`}
                            className="w-full flex-shrink-0 h-96 object-cover rounded-xl"
                        />
                    ))}
                </div>

                <div className="absolute top-0 h-full w-full flex justify-between items-center text-black px-4 text-3xl">
                    <button
                        onClick={prevSlide}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <FiArrowLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <FiArrowRight />
                    </button>
                </div>
            </div>

            {/* Pontos de navegação */}
            <div className="flex justify-center mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
