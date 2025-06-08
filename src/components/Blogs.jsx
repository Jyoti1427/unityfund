import React from "react";
import Img1 from "../assets/blog1.jpeg";
import Img2 from "../assets/blog2.jpeg";
import Img3 from "../assets/blog3.jpeg";
import { motion } from "framer-motion";

const BlogData = [
  {
    img: Img1,
    title: "No one has ever become poor by giving.– Anne Frank",
    description:
      "Anne Frank’s words remind us that true wealth lies in giving, not accumulating. Generosity — big or small —  creates ripples of hope, deepens our humanity, and connects us with others in meaningful ways.",
    date: "Jan 22, 2025",
    writer: "Frank",
  },

  {
    img: Img2,
    title:
      "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    description:
      "Mahatma Gandhi’s profound words reveal that true self-discovery lies in serving others. When we step beyond our own needs and offer help, kindness, or time, we uncover deeper purpose and connection. In giving selflessly, we don’t just uplift others — we awaken our truest self. Service becomes the mirror through which we recognize our humanity.",
    date: "March 05, 2025",
    writer: "Jhon",
  },

  {
    img: Img3,
    title:
      "The smallest act of kindness is worth more than the grandest intention. – Oscar Wilde",
    description:
      "Grand plans and noble thoughts mean little without action. A simple smile, a helping hand, or a kind word can touch hearts more deeply than unfulfilled promises. Kindness, no matter how small, has the power to change lives. It’s in doing, not just dreaming, that compassion truly shines.",
    date: "Oct 18, 2024",
    writer: "Frank",
  },
];

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Blogs = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container py-12">
        <h1 className="mb-8 border-l-8 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BlogData.map((blog, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardAnimation}
              whileHover={{ scale: 1.03 }}
              className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={blog.img}
                  alt=""
                  className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between pt-2 text-slate-600 text-sm">
                <p>{blog.date}</p>
                <p className="line-clamp-1">by {blog.writer}</p>
              </div>

              <div className="space-y-2 py-3">
                <h1 className="line-clamp-1 font-bold">{blog.title}</h1>
                <p className="line-clamp-2 text-sm">{blog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
