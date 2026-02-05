// src/pages/About.jsx

import React, { useEffect, useRef } from "react";

// Swiper
import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/navigation";

// Campus images
import campus1 from "../assets/campus1.jpeg";
import campus2 from "../assets/campus2.jpeg";
import campus3 from "../assets/campus3.jpeg";
import campus4 from "../assets/campus4.jpeg";
import campus5 from "../assets/campus5.jpeg";
import toddler from "../assets/toddler.jpeg";
const About = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperRef.current;
    if (swiperEl) {
      Object.assign(swiperEl, {
        slidesPerView: 1,
        loop: true,
        navigation: true,
      });
      swiperEl.initialize();
    }
  }, []);

  const campusSlides = [
    { src: campus1, alt: "Main building and entrance" },
    { src: campus2, alt: "Students in science laboratory" },
    { src: campus3, alt: "Basketball court and sports facilities" },
    { src: campus4, alt: "Library and study area" },
    { src: campus5, alt: "Students in cultural event" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-[#1C3F82] h-32 sm:h-56 md:h-64 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
          ABOUT US
        </h1>
        <p className="mt-3 text-sm opacity-90">
          Home <span className="mx-2">›</span>{" "}
          <span className="font-medium">About Us</span>
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-24 text-gray-700">

        {/* INTRO */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Welcome to Spring Hill English Boarding School
          </h2>

          <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-5 "style={{textAlign:"left", lineHeight:"1.4"}}>
            <p>
              Established in 1998, Spring Hill English Boarding School has earned
              a respected reputation for providing quality education and
              holistic student development.
            </p>
            <p>
              Alongside a structured curriculum, Spring Hill promotes
              extracurricular activities and practical learning opportunities
              that help students develop confidence, leadership skills, and
              social responsibility.
            </p>
          </div>
        </section>

        {/* IMAGE SLIDER */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900">
            Glimpses of Spring Hill English Boarding School
          </h2>

          <div className="overflow-hidden rounded-xl shadow-md">
            <swiper-container
              ref={swiperRef}
              init="false"
              className="w-full"
              style={{
                "--swiper-navigation-color": "#7dd3fc",
                "--swiper-navigation-size": "22px",
              }}
            >
              {campusSlides.map((slide, index) => (
                <swiper-slide key={index}>
                  <div className="relative h-64 sm:h-80 md:h-[480px]">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </section>

        {/* WHAT WE BELIEVE */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-12">
              What We Believe
            </h2>

            <ul className="space-y-8 max-w-4xl mx-auto text-lg leading-relaxed">
              <li>• Respect, Kindness, Integrity, and Responsibility</li>
              <li>• Learning connected to real-world public purpose</li>
              <li>• A strong community of belonging</li>
            </ul>
          </div>
        </section>

        {/* OUR PROGRAM — RESTORED */}
    {/* OUR PROGRAM */}
<section className="space-y-12 pt-12 border-t border-gray-200">
  <div className="text-center">
    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
      Our Program
    </h2>
    <p className="text-lg text-gray-600">
      Structured education from early years through secondary levels.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
    {/* Preschool */}
    {/* Preschool */}
<div className="text-center max-w-xs">
  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
    <img
      src={toddler}
      alt="Teacher caring for a 3-year-old toddler in preschool classroom"
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="mt-6 text-xl font-medium text-gray-800">
    Preschool
  </h3>
  <p className="text-gray-600">AGES 2–5</p>
</div>

   

    {/* Lower School */}
    <div className="text-center max-w-xs">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="Lower school students reading together"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-6 text-xl font-medium text-gray-800">
        Lower School
      </h3>
      <p className="text-gray-600">GRADES K–4</p>
    </div>

    {/* Middle School */}
    <div className="text-center max-w-xs">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          alt="Middle school students learning science"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-6 text-xl font-medium text-gray-800">
        Middle School
      </h3>
      <p className="text-gray-600">GRADES 5–8</p>
    </div>

    {/* Upper School */}
    <div className="text-center max-w-xs">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
          alt="Upper school students studying and collaborating"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-6 text-xl font-medium text-gray-800">
        Upper School
      </h3>
      <p className="text-gray-600">GRADES 9–12</p>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
    <a className="px-10 py-4 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
      VISIT
    </a>
    <a className="px-10 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
      ENROLL
    </a>
  </div>





          <div className="text-center text-gray-600 text-sm max-w-4xl mx-auto space-y-5 mt-14">
            <p className="text-lg text-gray-600">
              Spring Hill English Boarding School does not discriminate on the
              basis of race, color, creed, national or ethnic origin, disability,
              sex, gender, or sexual orientation.
            </p>
            <p className="text-lg text-gray-600">
              The school is accredited by relevant Nepalese educational bodies
              and committed to excellence in education.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
