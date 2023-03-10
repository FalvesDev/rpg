'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import hero from '../../public/images/hero-p.png';

type Props = {}

export default function Hero({}: Props) {

        const [text] = useTypewriter({
            words: [
                "Olá, viajante",
                "Seja bem vindo",
                "Exmo'vek te aguarda!"
            ],
            loop: 3,
            delaySpeed: 2000,
        })
        
        
    return (
        <motion.div 
        initial={{
            y: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            y: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }}
        className="z-0 h-screen pb-[150px] flex flex-col items-center justify-center text-center overflow-hidden">
        <Image 
        className="z-1 relative h-80 w-80 mx-auto mb-4" 
        src={hero} 
        alt=""
        />
        <div>
            <h2 className="text-sm uppercase text-gray-100 pb-2 pt-2 tracking-[15px]">
                EXMO'VEK A JORNADA
            </h2>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#F7AB0A"/>
            </h1>
        </div>
    </motion.div>
    )
}