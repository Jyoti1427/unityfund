import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OverviewCounter from "./components/OverviewCounter";
import OurMission from "./components/OurMission";
import Banner from "./components/Banner";
import VideoBanner from "./components/VideoBanner";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white ">
        <Navbar />
        <Hero />
        <OverviewCounter />
        <OurMission />
        <Banner />
        <VideoBanner />
        <Blogs />
        <Footer />
      </main>
    </>
  )
}

export default App
