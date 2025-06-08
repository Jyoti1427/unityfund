import { link } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const VideoBanner = () => {
  const videoLinks = [
    "https://www.youtube.com/embed/TqhNILVX8IE?si=oSYtTtz09fgaQp4-",
    "https://www.youtube.com/embed/RQu7jpcNUWI?si=EscvOz0AgFj7eAS0",
    "https://www.youtube.com/embed/0CbFrom3Qkk?si=WqHuiu8hX8h5uqeG",
  ];

  return (
    <section id="initiatives">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-primary"
      >
        <div className="container py-8 md:py-16">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 md:gap-8"
          >
            {/* video stack */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              className="relative md:h-[740px] flex flex-col gap-6 md:gap-0 md:block"
            >
              {videoLinks.map((link, index) => (
                <div
                  key={index}
                  className={`w-full mx-auto md:w-[500px] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:z-50 ${
                    index === 0
                      ? "md:absolute md:left-28 -top-8 z-10"
                      : index === 1
                      ? "md:absolute md:top-60 -left-48 z-20"
                      : "md:absolute md:-bottom-8 left-28 z-30"
                  }`}
                >
                  <motion.iframe
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="w-full h-40 sm:h-48 md:h-64 rounded-xl"
                    src={link}
                    title={`video-${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></motion.iframe>
                </div>
              ))}
            </motion.div>

            {/* content */}
            <div>
              <motion.h1
                variants={textVariant(0.6)}
                initial="hidden"
                whileInView="show"
                className="text-3xl md:text-4xl font-bold mb-5 px-3 text-white"
              >
                Every Frame Tells a Story
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                className="text-white text-lg px-3 my-8 font-medium"
              >
                Every act of kindness creates a ripple of hope. Through these
                stories, witness how a simple donation transforms into a
                lifeline for someone in need. Charity is not just about giving —
                it’s about connecting hearts, uplifting lives, and restoring
                dignity. These powerful moments captured on video show the real
                impact of your support. Each face, each smile, each tear — they
                speak louder than words. Let these stories remind us that
                together, we can be the light in someone’s darkest hour. Watch,
                feel, and be a part of the change.
              </motion.p>

              <motion.p
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView="show"
                className="text-green-800 text-lg px-3 font-bold"
              >
                "We make a living by what we get, but we make a life by what we
                give."
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
                className="text-green-800 text-lg px-3 mb-8 font-bold"
              >
                ~ Winston Churchill
              </motion.p>
              <motion.button
                variants={fadeIn("left", 0.9)}
                initial="hidden"
                whileInView="show"
                className="rounded-md border-2 border-white bg-white px-4 py-2 ml-3 text-slate-800 font-medium transition-colors duration-300 hover:text-black hover:bg-gray-200"
              >
                Watch Stories
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoBanner;
