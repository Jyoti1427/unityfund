import React from "react";
import Image2 from "../assets/blog4.jpeg";
import Image from "../assets/image2.jpeg";

const Banner = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          {/* image container */}
          <div>
            <img
              src={Image2}
              alt=""
              className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
            />
          </div>
          {/* text container */}
          <div className="lg:max-w-[400px] space-y-6">
            <h1 className="text-2xl md:text-4xl mb-5 font-semibold">
              Help the Needy People
            </h1>
            <ul className="flex list-inside flex-col gap-2 md:gap-4 font-medium">
              <li>
                🌟 Extend a Hand of Hope – Your support provides food, shelter,
                and dignity to those who are struggling to meet basic needs.
              </li>
              <li>
                🕊️ Restore Faith in Humanity – By helping the less fortunate,
                you become a beacon of compassion in a world that deeply needs
                kindness.
              </li>
              <li>
                💫 Turn Pain into Possibility – Every donation uplifts someone’s
                spirit, offering a chance to rebuild their life with courage,
                hope, and renewed strength.
              </li>
            </ul>
            <button className="btn-primary">Donate Now</button>
          </div>
        </div>
      </div>

      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          {/* text container */}
          <div className="lg:max-w-[400px] space-y-6">
            <h1 className="text-2xl md:text-4xl mb-5 font-semibold">
              Join Our Movement
            </h1>
            <ul className="flex list-inside flex-col gap-2 md:gap-4 font-medium">
              <li>
                🤝 Be the Change – Every small act of kindness creates ripples
                of transformation in someone’s life.
              </li>
              <li>
                🌍 Unite for a Cause – Join a compassionate community committed
                to helping the underserved.
              </li>
              <li>
                💖 Make an Impact – Your support can bring hope, dignity, and
                opportunity to those in need.
              </li>
            </ul>
            <button className="btn-primary">Be a Changemaker</button>
          </div>
          {/* image container */}
          <div>
            <img
              src={Image}
              alt=""
              className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
