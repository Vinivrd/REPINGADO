import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
    const handleScroll = (e) => {
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    }

    const menuVariants = {
        closed: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <nav className="w-full bg-gray-50">
            <div className="w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Botao*/}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMenu}>
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-9">
                                <a href="#sobre"
                                    className="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >SOBRE</a>

                                <a href="#casa"
                                    className="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >CASA</a>

                                <a href="#moradores"
                                    className="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >MORADORES</a>

                                <a href="#pastas"
                                    className="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >PASTAS</a>

                                <a href="#roles"
                                    className="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >ROLÊS</a>

                                <a href="https://www.instagram.com/repingado/"
                                    className="rounded-3xl bg-neutral-800 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-700" aria-current="page">INSTAGRAM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="sm:hidden fixed top-16 right-0 w-full bg-gray-50 shadow-lg z-[99]"
                        id="mobile-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <a href="#sobre"
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page"
                                onClick={handleScroll}>SOBRE</a>

                            <a href="#casa"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                onClick={handleScroll}>CASA</a>

                            <a href="#moradores"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                onClick={handleScroll}>MORADORES</a>

                            <a href="#pastas"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                onClick={handleScroll}>PASTAS</a>

                            <a href="#roles"
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                                onClick={handleScroll}>EVENTOS</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
};

export default NavBar;