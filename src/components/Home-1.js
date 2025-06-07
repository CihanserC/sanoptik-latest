import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import animationVideo3 from '../assets/animations/animation-3.mp4';
import HomeTwo from './Home-2';

export default function HomeOne() {
  const navigate = useNavigate();

  const handleClick = () => {
    const home2Element = document.getElementById('home2');
    if (home2Element) {
      home2Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden font-sans bg-emerald-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={animationVideo3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-emerald-950/40 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-wide"
          >
            SAN OPTİK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl"
          >
            Dünyaca ünlü markalar ve uzman ekibimizle hizmetinizdeyiz.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-full text-lg font-medium hover:bg-emerald-600 transition"
            onClick={handleClick}
          >
            SAN Optik'i Keşfedin
          </motion.button>
        </div>
      </div>
      <div id="home2">
        <HomeTwo />
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905345679808"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.042 22l4.917-1.29A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.874-.377-4.08-1.045l-.292-.159-3.026.793.804-2.938-.177-.34A7.957 7.957 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.727-5.919c-.294-.147-1.735-.857-2.003-.954-.268-.097-.463-.145-.657.145-.194.29-.751.954-.921 1.15-.17.195-.34.22-.634.073-.294-.147-1.241-.457-2.363-1.456-.873-.778-1.462-1.739-1.632-2.033-.17-.294-.018-.453.128-.6.13-.13.294-.34.44-.51.147-.17.196-.292.294-.487.098-.195.049-.366-.024-.512-.073-.146-.657-1.583-.901-2.169-.244-.585-.487-.487-.657-.487-.17 0-.366-.024-.56-.024-.194 0-.51.073-.778.366-.268.293-1.022.954-1.022 2.325 0 1.371 1.022 2.742 1.168 2.937.146.195 2.026 3.079 4.91 4.318.685.293 1.22.469 1.635.603.687.219 1.314.19 1.803.115.55-.073 1.755-.706 2.003-1.389.248-.683.248-1.27.173-1.39-.073-.122-.27-.195-.563-.342z"
          />
        </svg>
        <span className="absolute right-16 bg-white text-green-600 px-4 py-2 rounded-lg font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Bize Yazın
        </span>
      </a>
    </>
  );
}
