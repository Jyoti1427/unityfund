import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const GetToKnowUs = [
  { name: "Home" },
  { name: "About Us" },
  { name: "Clients" },
  { name: "Services" },
  { name: "Press Releases" },
  { name: "Contact Us" },
];

const Donate = [
  { name: "Make a Donation" },
  { name: "Corporate Giving" },
  { name: "Sponsor a Child/Family" },
  { name: "How Your Donation Helps" },
];

const LetUsHelpYou = [
  { name: "Privacy Policy" },
  { name: "Terms & Conditions" },
  { name: "Help" },
  { name: "FAQs" },
];

const GetInvolved = [
  { name: "Become a Volunteer" },
  { name: "Start a Campaign" },
  { name: "Partner With Us" },
  { name: "Careers" },
];

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
    >
      <div className="text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-6 max-w-[1440px] mx-auto"
        >
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12"
          >
            {/* Branding section */}
            <motion.div variants={fadeIn("up", 0.5)} className="px-2 py-8">
              <motion.h1
                variants={fadeIn("up", 0.6)}
                className="mb-3 text-justify text-2xl sm:text-left sm:text-3xl"
              >
                <a href="/home" className="uppercase">
                  Unity
                  <span className="inline-block font-bold text-primary">
                    Fund
                  </span>
                </a>
              </motion.h1>
              <motion.p
                variants={fadeIn("up", 0.7)}
                className="text-sm leading-relaxed"
              >
                Together, we rise by lifting others — because even small hands
                can make a world of difference. Every drop of kindness fills
                someone’s empty cup, and your compassion in action becomes hope
                for those who need it most
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.8)}
                className="flex items-center gap-3 mt-4 text-sm"
              >
                <FaLocationArrow />
                <p>47-B, Lotus Residency, Andheri West Mumbai, (M.H.)</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.9)}
                className="flex items-center gap-3 mt-3 text-sm"
              >
                <FaMobileAlt />
                <p>+91 98345 62109</p>
              </motion.div>
            </motion.div>

            {/* Quick Links section */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 col-span-2"
            >
              <motion.div variants={fadeIn("up", 0.6)} className="px-2 py-8">
                <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                  Get To Know Us
                </h1>
                <ul className="flex flex-col gap-3">
                  {GetToKnowUs.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeIn("up", 0.7)} className="px-2 py-8">
                <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                  Donate
                </h1>
                <ul className="flex flex-col gap-3">
                  {Donate.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeIn("up", 0.8)} className="px-2 py-8">
                <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                  Let Us Help You
                </h1>
                <ul className="flex flex-col gap-3">
                  {LetUsHelpYou.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeIn("up", 0.9)} className="px-2 py-8">
                <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                  Get Involved
                </h1>
                <ul className="flex flex-col gap-3">
                  {GetInvolved.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social & Newsletter section */}
              <motion.div
                variants={fadeIn("up", 1.0)}
                className="px-2 col-span-2 sm:col-span-1 py-8"
              >
                <h1 className="mb-3 text-lg font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="space-y-3">
                  <h1>Subscribe to our newsletter</h1>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className=" px-3 py-1 rounded-full mt-3 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <motion.div
                  variants={fadeIn("up", 1.1)}
                  className="flex gap-4 mt-6 items-center"
                >
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaInstagram className="size-6 " />
                  </a>
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaFacebook className="size-6 " />
                  </a>
                  <a href="#" className="duration-200 hover:scale-105">
                    <FaLinkedin className="size-6 " />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Divider and Bottom Text */}
          <hr className="opacity-30 mt-6" />
          <motion.div variants={fadeIn("up", 1.1)} className="bottom-footer">
            <p className="py-6 text-center">
              Copyright © {new Date().getFullYear()}. All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
