// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_k48ed9k",
        "template_ik4do6t",
        formRef.current,
        "R64jyQhjF8L6EJJSC",
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => setStatus("error"),
      );
  };

  return (
    <>
      {/* HERO / BANNER SECTION */}
      <section className="bg-[#1C3F82] h-28 sm:h-56 md:h-64 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
          Contact Us
        </h1>
        <p className="mt-3 text-sm opacity-90">
          <Link to="/" className="underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="font-medium">Contact Us</span>
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* CONTACT INFO */}
            <div className="bg-white rounded-xl shadow-md p-8 space-y-4 text-gray-700">
              <p>📍 Banepa-4, Kavre, Nepal</p>

              <p>
                ✉️{" "}
                <a
                  href="mailto:springhill607@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  springhill607@gmail.com
                </a>
              </p>

              <p>
                📞{" "}
                <a
                  href="tel:015344636"
                  className="text-blue-600 hover:underline"
                >
                  9841103044
                </a>
                ,{" "}
                <a
                  href="tel:015321365"
                  className="text-blue-600 hover:underline"
                >
                  9860865441
                </a>
              </p>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-xl shadow-md">
              <iframe
                title="Spring Hill School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6663.672968213963!2d85.50126501574405!3d27.65430084631961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f002732c291%3A0xe38c519dc929c2aa!2sSpring%20Hill%20School%2C%20Banepa%2C%20Nala!5e0!3m2!1sen!2snp!5m2!1sen!2snp"
                className="w-full h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT COLUMN – FORM */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full border-b border-gray-400 py-2 focus:outline-none"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full border-b border-gray-400 py-2 focus:outline-none"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full border-b border-gray-400 py-2 focus:outline-none"
              />

              {/* UPDATED: Program Interested */}
              <select
                name="program"
                required
                className="w-full border-b border-gray-400 py-2 focus:outline-none bg-transparent text-gray-700"
              >
                <option value="" disabled selected>
                  Program Interested
                </option>
                <option value="Pre-School">Pre-School</option>
                <option value="Basic Level (Grade 1–5)">
                  Basic Level (Grade 1–5)
                </option>
                <option value="Secondary Level (Grade 6–10)">
                  Secondary Level (Grade 6–10)
                </option>
                <option value="High School (Grade 11–12)">
                  High School (Grade 11–12)
                </option>
              </select>

              <textarea
                name="message"
                rows="1"
                placeholder="Your Message"
                required
                className="w-full border-b border-gray-400 py-2 focus:outline-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 px-10 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>

              {status === "success" && (
                <p className="text-green-600 mt-4 text-sm">
                  ✅ Message sent successfully. We’ll contact you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 mt-4 text-sm">
                  ❌ Failed to send message. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
