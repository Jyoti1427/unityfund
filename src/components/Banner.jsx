import React from "react";
import Image2 from "../assets/blog4.jpeg";
import Image from "../assets/image2.jpeg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Banner = () => {
  return (
    <section id="join">
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <div className="container md:h-[500px] flex items-center justify-center py-10">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
            {/* image container */}
            <div>
              <motion.img
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                src={Image2}
                alt=""
                className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
              />
            </div>
            {/* text container */}
            <div className="lg:max-w-[400px] space-y-6">
              <motion.h1
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView="show"
                className="text-2xl md:text-4xl mb-5 font-semibold"
              >
                Help the Needy People
              </motion.h1>
              <motion.ul
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                className="flex list-inside flex-col gap-2 md:gap-4 font-medium"
              >
                <li>
                  🌟 Extend a Hand of Hope – Your support provides food,
                  shelter, and dignity to those who are struggling to meet basic
                  needs.
                </li>
                <li>
                  🕊️ Restore Faith in Humanity – By helping the less fortunate,
                  you become a beacon of compassion in a world that deeply needs
                  kindness.
                </li>
                <li>
                  💫 Turn Pain into Possibility – Every donation uplifts
                  someone’s spirit, offering a chance to rebuild their life with
                  courage, hope, and renewed strength.
                </li>
              </motion.ul>
              <motion.button
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView="show"
                className="btn-primary"
              >
                Donate Now
              </motion.button>
            </div>
          </div>
        </div>

        <div className="container md:h-[500px] flex items-center justify-center py-10">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
            {/* text container */}
            <div className="lg:max-w-[400px] space-y-6">
              <motion.h1
                variants={textVariant(0.6)}
                initial="hidden"
                whileInView="show"
                className="text-2xl md:text-4xl mb-5 font-semibold"
              >
                Join Our Movement
              </motion.h1>
              <motion.ul
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView="show"
                className="flex list-inside flex-col gap-2 md:gap-4 font-medium"
              >
                <li>
                  🤝 Be the Change – Every small act of kindness creates ripples
                  of transformation in someone’s life.
                </li>
                <li>
                  🌍 Unite for a Cause – Join a compassionate community
                  committed to helping the underserved.
                </li>
                <li>
                  💖 Make an Impact – Your support can bring hope, dignity, and
                  opportunity to those in need.
                </li>
              </motion.ul>
              <motion.button
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
                className="btn-primary"
              >
                Be a Changemaker
              </motion.button>
            </div>
            {/* image container */}
            <div>
              <motion.img
                variants={fadeIn("left", 0.9)}
                initial="hidden"
                whileInView="show"
                src={Image}
                alt=""
                className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
