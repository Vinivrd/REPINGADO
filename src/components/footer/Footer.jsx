import React from "react";
import { SlSocialGithub, SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-900 dark:border-gray-600 mt-10">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                codado pelo vinao
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-4">
                <li>
                    <a href="#" class="hover:underline ">Home</a>
                </li>

                <li>
                    <a href="https://github.com/Vinivrd" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <SlSocialGithub/>
                        <span class="sr-only">GitHub account</span>
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/repingado/" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <SlSocialInstagram/>
                        <span class="sr-only">Instagram</span>
                    </a>
                </li>

                <li>
                    <a href="https://wa.me/5511969238993" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <FaWhatsapp/>
                        <span class="sr-only">Whatsapp</span>
                    </a>
                </li>


            </ul>
        </footer>
    );
}

export default Footer;