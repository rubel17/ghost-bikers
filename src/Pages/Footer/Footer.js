import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-success p-4 text-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-lg sm:text-center dark:text-gray-400">
                © 2022{" "}
               <Link href="https://flowbite.com" className="hover:underline">
                    EDUCARE™
               </Link>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-bold text-lg dark:text-gray-400 sm:mt-0">
                <li>
                   <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                        About
                   </Link>
                </li>
                <li>
                   <Link to="/privacyPolicy" className="mr-4 hover:underline md:mr-6">
                        Privacy Policy
                   </Link>
                </li>
                <li>
                   <Link to="/licensing" className="mr-4 hover:underline md:mr-6">
                        Licensing
                   </Link>
                </li>
                <li>
                   <Link to="/contact" className="hover:underline">
                        Contact
                   </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;