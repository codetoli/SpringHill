import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import campus1 from "../assets/campus1.jpeg";
import campus2 from "../assets/campus2.jpeg";
import campus3 from "../assets/campus3.jpeg";
import campus4 from "../assets/campus4.jpeg";
import Assets from "../assets/assets";
import Notice from "./LatestNews";

function HomePage() {
  // Why Choose SHEBS carousel sta  te
  const [currentSlide, setCurrentSlide] = useState(0);

  const whyChooseData = [
    {
      title: "Academic Excellence",
      description:
        "Comprehensive curriculum from pre-K through 12th grade with experienced faculty dedicated to student success and holistic development.",
      image: campus1,
    },
    {
      title: "Modern Facilities",
      description:
        "State-of-the-art infrastructure with fully equipped classrooms, science labs, computer centers, and modern recreational spaces.",
      image: campus2,
    },
    {
      title: "Holistic Development",
      description:
        "Focus on intellectual, ethical, and interpersonal growth to shape well-rounded individuals ready for global challenges.",
      image: campus3,
    },
    {
      title: "35+ Years Legacy",
      description:
        "Proven track record since 1988 of producing successful alumni who contribute positively to society and excel globally.",
      image: campus4,
    },
  ];



  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whyChooseData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + whyChooseData.length) % whyChooseData.length,
    );
  };

  

  return (
    <div className="font-['Poppins']">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-24 pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <img
          src={Assets.homebg}
          alt="School campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFF]/70 to-blue-500/50" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-left text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-[#FDB913]">Quality Education</span> Since 1988
          </h1>

          <p className="text-white/90 leading-relaxed mb-10">
            Located at Nala, we have been providing quality education and
            skillful knowledge to develop the best manpower. Our mission is to
            develop the intellectual, ethical, and interpersonal foundations
            students need to be constructive contributors to the world.
          </p>

          <div className="flex flex-wrap gap-10 mb-10">
            <div>
              <span className="block text-4xl font-extrabold text-[#FF6B34]">
                1500+
              </span>
              <span className="text-white/90">Students</span>
            </div>

            <div>
              <span className="block text-4xl font-extrabold text-[#FF6B34]">
                PG – 12
              </span>
              <span className="text-white/90">Classes</span>
            </div>

            <div>
              <span className="block text-4xl font-extrabold text-[#FF6B34]">
                35+
              </span>
              <span className="text-white/90">Years</span>
            </div>
          </div>

          <div className="inline-block bg-[#FF6B34] px-8 py-4 rounded-full font-semibold">
            Admissions Now Open for 2083 🎓
          </div>
        </div>
      </section>

      {/* Why Choose SHEBS Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl font-bold text-[#1C3F82] mb-6 text-center">
            Why Choose SHEBS
          </h2>

          <span className="block w-60 h-[2px] mx-auto bg-[#FF6B34] mb-10"></span>

          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Content - Left */}
            <div className="flex-1">
              <div key={currentSlide} className="transition-all duration-500">
                <h3 className="text-3xl text-[#1C3F82] mb-4 font-bold">
                  {whyChooseData[currentSlide].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {whyChooseData[currentSlide].description}
                </p>
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-[#FF6B34] text-white flex items-center justify-center text-2xl hover:bg-[#e55a28] hover:scale-110 transition-all"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-[#FF6B34] text-white flex items-center justify-center text-2xl hover:bg-[#e55a28] hover:scale-110 transition-all"
                >
                  →
                </button>
              </div>
            </div>

            {/* Circular Image - Right with 10px offset border */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                {/* Offset circle border (10px = 2.5 in Tailwind with -inset-2.5) */}
                <div className="absolute -inset-2.5 rounded-full border-4 border-[#FF6B34]"></div>
                {/* Main circular image */}
                <img
                  key={currentSlide}
                  src={whyChooseData[currentSlide].image}
                  alt={whyChooseData[currentSlide].title}
                  className="relative w-80 h-80 rounded-full object-cover shadow-2xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get to Know SHEBS Section */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold text-[#1C3F82] mb-16 text-center">
          GET TO KNOW SHEBS
        </h2>

        <div className="max-w-6xl mx-auto relative flex justify-center items-center">
          {/* Image */}
          <div className="relative w-full max-w-3xl aspect-video border-2 border-[#1C3F82] rounded-lg overflow-hidden">
            <img
              src={Assets.homebg}
              alt="Campus Life"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Orange rectangle overlapping */}
          <div
            className="
        absolute
        left-[-4rem] md:left-[-6rem] 
        z-20
        bg-[#FF6B34]
        w-64 h-113 md:w-80
        p-6 md:p-8
        rounded-tl-[80px]
        rounded-br-[80px]
        shadow-xl
        flex items-center
      "
          >
            <p className="text-white text-sm md:text-base leading-relaxed">
              Spring Hill English Boarding School located at Nala has been
              providing quality education since 1988. We promise skillful
              knowledge to provide the best manpower.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
        {/* Header with arrows */}
       
        <Notice  />
      
      </section>
    </div>
  );
}

export default HomePage;
