import React, { useState } from "react";
import HeroImg from "../assets/image2.jpeg";
import { motion } from "framer-motion";
import DonationForm from "./DonationForm";

const bgStyle = {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  width: "100%",
};

const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <div style={bgStyle}>
      <div className="min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-primary/50 pt-20 pb-10 md:pt-48">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
            {/* Hero Text section */}
            <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
              <motion.h1
                variants={FadeUp(0.2)}
                initial="initial"
                animate="animate"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold"
              >
                Join Us in Changing Lives
              </motion.h1>
              <motion.p
                variants={FadeUp(0.4)}
                initial="initial"
                animate="animate"
              >
                A single act of kindness can spark hope, lighting up lives that
                once felt forgotten. With every donation, we come together to
                rebuild dreams, restore dignity, and bring lasting change. Join
                us — because when compassion leads the way, changing lives
                becomes possible.
              </motion.p>

              <div className="space-x-4">
                <motion.button
                  variants={FadeUp(0.6)}
                  initial="initial"
                  animate="animate"
                  className="btn-primary"
                >
                  Get Started
                </motion.button>
                <motion.button
                  variants={FadeUp(0.8)}
                  initial="initial"
                  animate="animate"
                  className="btn-outline"
                >
                  Login
                </motion.button>
              </div>
            </div>

            {/* Form section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <DonationForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
