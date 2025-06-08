import React from "react";
import { animate, motion } from "framer-motion";
import { GoGoal } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";

const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const OurMission = () => {
  return (
    <div className="container my-16 bg-white dark:bg-gray-900 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-xl border-t-8 border-green-800 dark:bg-slate-800"
        >
          <div className="flex items-center gap-3">
            <GoGoal className="text-green-800 font-bold size-7" />
            <h1 className="text-xl font-semibold">Our Vision</h1>
          </div>
          <p>
            Our vision is to create a world where kindness connects hearts and
            transforms lives. We believe every act of giving carries the power
            to heal, uplift, and inspire. Through this platform, we aim to
            bridge the gap between those who care and those in need. It’s more
            than just donations—it’s about restoring dignity and spreading
            compassion.
          </p>
          <a
            href="#"
            className="inline-block hover:text-primary border-b-2 hover:border-primary"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-xl border-t-8 border-yellow-500 dark:bg-slate-800"
        >
          <div className="flex items-center gap-3">
            <FaHandshake className="text-yellow-500 font-bold size-7" />
            <h1 className="text-xl font-semibold">Our Mission</h1>
          </div>
          <p>
            Our mission is to provide a transparent, trustworthy, and
            user-friendly platform where generosity meets real needs. We focus
            on empowering donors and ensuring every contribution brings
            measurable change to lives. Together, we can build a future where no
            one feels forgotten or alone
          </p>
          <br />
          <a
            href="#"
            className="inline-block hover:text-primary border-b-2 hover:border-primary"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;
