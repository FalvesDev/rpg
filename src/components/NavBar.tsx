'use client';

import { useState } from 'react'
import { close,  menu } from '../../public/botoes';
import { navLinks } from '../data/links'
import Image from 'next/image';
import d20logo from '../../public/images/d20-logo.png';

import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const NavBar = (props: Props) => {

    const [toggle, setToggle] = useState(false);

    return (   
    <nav 
        className=" bg-transparent top-0 p-5 flex items-start justify-between max-w-7xl mx-auto  xl:items-center"
    >
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5
        }}
        className="flex flex-row items-center">
            <a 
                href="/" 
                className="flex items-center"
            >
                <Image 
                src={d20logo}
                alt="menu"
                className="w-[70px] h-[70px] object-contain"
                />
                <span 
                    className="self-center text-xl md:text-2xl font-semibold"
                >
                    RPG DO JAMELORD
                </span>
            </a>
        </motion.div>
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5
        }}
        className="flex flex-row items-center text-white cursor-pointer">
            <div className="hidden w-full md:block md:w-auto">
                <ul className="flex flex-row space-x-10 md:mt-5 xl:mt-3 text-2xl font-medium">
                        {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins uppercase font-semibold cursor-pointer text-[20px] ${index === navLinks.length - 1 ? 'mr - 0' : 'mr-0'} text-white`}
                >
                    <a href={`#${nav.id}`}>
                    {nav.title}
                    </a>

                </li>
                ))}
                </ul>
            </div>
            {/* botão */}
            <div className="md:hidden flex flex-row justify-end items-center mt-2">
            <Image 
                src={toggle ? close : menu}
                alt="menu"
                className="w-[50px] h-[50px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
            />
            <div 
                className={`${toggle ? 'flex' : 'hidden'} z-20 p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                    key={nav.id}
                    className={`font-poppins  uppercase font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr - 0' : 'mb-4'} text-black`}
                    >
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>

                    </li>
                ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    </nav>
    

    )
}

export default NavBar