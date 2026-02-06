import React from "react";
import Assets from "../assets/assets";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-[#1C3F82] text-white rounded-t-xl px-6 pt-20 pb-6">
      {/* Circle Logo */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white border-[5px] border-[#f54900] shadow-xl flex items-center justify-center z-10">
        <img
          src={Assets.logo}
          alt="Spring Hill School"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-left md:text-left">
        <div>
          <h3 className="text-xl text-[#f54900] mb-4">Find Us</h3>
          <p>Spring Hill English Boarding School</p>
          <p>📍 Banepa, Kavre, Nepal</p>
          <p>📞 +977 985-1123372</p>
          <p>✉️ springhill607@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-[#f54900] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-[#f54900]">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-[#f54900]">
                About Us
              </a>
            </li>
            <li>
              <a href="/Events" className="hover:text-[#f54900]">
                Events
              </a>
            </li>
            <li>
              <a href="/Notice" className="hover:text-[#f54900]">
                Notice
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-[#f54900]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-xl text-[#f54900] mb-4">Download App</h3>
          <p className="mb-3">Get our mobile application</p>

          <div className="flex flex-col gap-3">
            <a
              href="https://apps.apple.com/np/app/spring-hill-e-b-s/id1565349229"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Assets.PlayStore}
                alt="App Store"
                className="max-w-[160px]"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.qubexedu.shebs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Assets.AppStore}
                alt="Google Play"
                className="max-w-[160px]"
              />
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl text-[#f54900] mb-4">Follow Us</h3>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.facebook.com/SHEBSBanepa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877f2]"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.tiktok.com/@springhillschool3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTiktok />
            </a>

            <a
              href="https://wa.me/9779841103044"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#25d366]"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-white/60 border-t border-white/20 pt-4">
        © 2026 Spring Hill English Boarding School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer
