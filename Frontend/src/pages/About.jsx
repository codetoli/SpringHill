// src/pages/About.jsx

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
      <section className="bg-[#1C3F82] h-32 sm:h-56 md:h-64 flex items-center justify-center text-white px-4">
        <div className="text-center mt-9">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            About Us
          </h1>

          <p className="mt-3 text-sm opacity-90">
            <Link to="/" className="underline">Home</Link>
            <span className="mx-2">›</span>
            <span className="font-medium">About Us</span>
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-24 text-gray-700">

        {/* INTRO */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Welcome to Spring Hill English Boarding School
          </h2>

          <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-5 text-justify">
            <p>
              At Spring Hill English Boarding School, we are dedicated to providing
              a nurturing and stimulating environment where students can excel
              academically, socially, and personally.
            </p>

            <p>
              Established in <strong>2045 B.S.</strong>, Spring Hill English Boarding School has earned
              a respected reputation for providing quality education and holistic
              student development.
            </p>

            <p>
              Located in <strong>Banepa-4, Kavre</strong>, the school promotes a structured curriculum
              alongside extracurricular activities and practical learning
              opportunities that help students develop confidence, leadership
              skills, and social responsibility.
            </p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 space-y-10">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">Our Vision</h3>
              <p className="text-lg">
                Nurturing dynamic learners in an inclusive environment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To empower young minds with resilience, instill a deep sense of
                compassion for others, and nurture a progressive mindset that
                values innovation and diversity in all aspects of learning and growth.
              </p>
            </div>
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
              <li>• Respect, kindness, integrity, and responsibility</li>
              <li>• Compassion, resilience, and social responsibility</li>
              <li>• Innovation, inclusivity, and lifelong learning</li>
            </ul>
          </div>
        </section>

        {/* OUR PROGRAM */}
        <section className="space-y-12 pt-12 border-t border-gray-200">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
              Our Program
            </h2>
            <p className="text-lg text-gray-600">
              Structured education from early years through higher secondary level.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
            {/* Preschool */}
            <div className="text-center max-w-xs">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
                <img src={toddler} alt="Montessori based preschool classroom" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-800">Pre-School</h3>
              <p className="text-gray-600">Montessori Based<br />Playgroup, Nursery, LKG, UKG</p>
            </div>

            {/* Grade 1–5 */}
            <div className="text-center max-w-xs">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350" alt="Primary level students" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-800">Basic Level</h3>
              <p className="text-gray-600">Grade 1 to 5</p>
            </div>

            {/* Grade 6–10 */}
            <div className="text-center max-w-xs">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7" alt="Secondary level students" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-800">Secondary Level</h3>
              <p className="text-gray-600">Grade 6 to 10</p>
            </div>

            {/* Grade 11–12 */}
            <div className="text-center max-w-xs">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
                <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0" alt="Management level students" className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-800">High School</h3>
              <p className="text-gray-600">
                Management Stream<br />
                Business Studies, Hotel Management, Computer Science
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <a
              href="https://maps.app.goo.gl/LTVX6tVyGWRKjB5z8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
            >
              VISIT CAMPUS
            </a>

            <Link
              to="/contact#admission-form"
              className="px-10 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
            >
              APPLY FOR ADMISSION
            </Link>
          </div>

          <div className="text-center text-gray-600 text-sm max-w-4xl mx-auto space-y-5 mt-14">
            <p className="text-lg text-gray-600 text-justify">
              Spring Hill English Boarding School does not discriminate on the
              basis of race, color, creed, national or ethnic origin, disability,
              sex, or gender.
            </p>
            <p className="text-lg text-gray-600 text-justify">
              The school is accredited by relevant Nepalese educational bodies
              and is committed to excellence in education.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
