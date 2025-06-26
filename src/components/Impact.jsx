import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaHandsHelping,
  FaHeartbeat,
  FaUtensils,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate size={28} />,
    value: 500,
    label: "Children Educated",
    bg: "bg-violet-600",
  },
  {
    icon: <FaUtensils size={28} />,
    value: 10000,
    label: "Meals Served",
    bg: "bg-emerald-500",
  },
  {
    icon: <FaHeartbeat size={28} />,
    value: 250,
    label: "Medical Camps",
    bg: "bg-blue-500",
  },
  {
    icon: <FaHandsHelping size={28} />,
    value: 800,
    label: "Families Supported",

    bg: "bg-pink-500",
  },
];

const Impact = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-violet-600">
          Your Impact Matters
        </h2>
        <p className="mb-12 text-gray-600 dark:text-gray-300 text-lg">
          Every contribution changes a life. Here's what we’ve achieved
          together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${stat.icon.bg}`}
              >
                {stat.icon}
              </div>
              <h3 className="text-3xl font-semibold">
                {stat.value.toLocaleString()}+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
