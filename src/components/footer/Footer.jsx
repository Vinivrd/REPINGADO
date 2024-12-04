import React from "react";
import { SlSocialGithub, SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow flex items-center justify-between dark:bg-zinc-900 dark:border-gray-600 mt-10">
            <span className="text-sm text-gray-500 dark:text-gray-400">
                codado pelo vinão
            </span>
            <ul className="flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline">Home</a>
                </li>

                <li>
                    <a href="https://github.com/Vinivrd" className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-xl">
                        <SlSocialGithub/>
                        <span className="sr-only">GitHub account</span>
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/repingado/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-xl">
                        <SlSocialInstagram/>
                        <span className="sr-only">Instagram</span>
                    </a>
                </li>

                <li>
                    <a href="https://wa.me/5511969238993" className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-xl">
                        <FaWhatsapp/>
                        <span className="sr-only">Whatsapp</span>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;