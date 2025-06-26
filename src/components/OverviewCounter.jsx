import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaDonate, FaHandsHelping, FaChartLine } from "react-icons/fa";

const OverviewCounter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="container h-12 md:h-32 p-3"
    >
      <div className="mx-auto my-4 w-full grid grid-cols-4 divide-x divide-slate-700 bg-white p-4 shadow-lg dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] lg:-translate-y-20 md:p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-4 mb-2">
            <FaUsers className="text-violet-600" size={24} />
            <p className="text-base font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp
                // enableScrollSpy={true}
                scrollSpyOnce={true}
                start={0}
                end={234}
                suffix="+"
                duration={2.75}
              />
            </p>
          </div>

          <p className="sm:text-md text-xs md:text-lg">Active Campaigns</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-4 mb-2">
            <FaChartLine className="text-violet-600" size={24} />
            <p className="text-base font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp
                // enableScrollSpy={true}
                scrollSpyOnce={true}
                start={0}
                end={56}
                suffix="+"
                duration={2.75}
              />
            </p>
          </div>

          <p className="sm:text-md text-xs md:text-lg">₹ Raised</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-4 mb-2">
            <FaDonate className="text-violet-600" size={24} />
            <p className="text-base font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp
                // enableScrollSpy={true}
                scrollSpyOnce={true}
                start={0}
                end={234}
                suffix="k+"
              />
            </p>
          </div>

          <p className="sm:text-md text-xs md:text-lg">Donations</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-3 pl-3 mb-2">
            <FaHandsHelping className="bg-blue-500 text-white h-9 w-9 p-1 rounded-full" size={24} />
            <p className="text-base font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp
                // enableScrollSpy={true}
                scrollSpyOnce={true}
                start={-875.039}
                end={160527.012}
                duration={2.75}
                separator=" "
                suffix="+"
              />
            </p>
          </div>

          <p className="sm:text-md text-xs md:text-lg">
            &nbsp;Registered Volunteers
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default OverviewCounter;
