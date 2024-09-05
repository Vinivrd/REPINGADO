import React, { useState } from "react";

const NavBar = () => {
    const handleScroll = (e) => {
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    }



    return (
        <nav >
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between ">
                    {/* Botao*/}
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/*Mobile menu button*/}
                        <button type="button"
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={toggleMenu}>

                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            {/*
                                Icon when menu is closed.

                                Menu open: "hidden", Menu closed: "block"
                           */}
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/*
                                Icon when menu is open.

                                Menu open: "block", Menu closed: "hidden"
                            */}
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-9">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a href="#sobre"
                                    class="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >SOBRE</a>

                                <a href="#casa"
                                    class="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >CASA</a>

                                <a href="#moradores"
                                    class="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >MORADORES</a>

                                <a href="#pastas"
                                    class="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >PASTAS</a>

                                <a href="#roles"
                                    class="rounded-2xl px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200"
                                    onClick={handleScroll}
                                >ROLÊS</a>

                                <a href="https://www.instagram.com/repingado/"
                                    class="rounded-3xl bg-neutral-800 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-700" aria-current="page">INSTAGRAM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            {isMenuOpen && (
                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href="#sobre"
                            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page"
                            onClick={handleScroll}>SOBRE</a>

                        <a href="#casa"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                            onClick={handleScroll}>CASA</a>

                        <a href="#moradores"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                            onClick={handleScroll}>MORADORES</a>

                        <a href="#pastas"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                            onClick={handleScroll}>PASTAS</a>

                        <a href="#roles"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                            onClick={handleScroll}>ROLÊS</a>

                    </div>
                </div>
            )}
        </nav>
    )
};

export default NavBar;