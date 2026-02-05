import React from "react";
import Assets from "../assets/assets.js";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #1C3F82;
          color: white;
          padding: 7rem 3rem 2rem;
          border-top-right-radius: 12px;
          position: relative;
          margin-top: 80px;
        }

        /* ===== CIRCLE IMAGE ===== */
        .footer-circle-image {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: white;
          border: 5px solid #FF6B34;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-circle-image img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        /* ===== CONTENT ===== */
        .footer-content {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: #FF6B34;
        }

        .footer-section p,
        .footer-section a {
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.8;
          text-decoration: none;
          display: block;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: #FF6B34;
        }

        /* ===== STORE BUTTONS ===== */
        .store-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .store-btn 
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .store-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .store-img {
   
          max-width: 160px;
          height: auto;
        }

    .social-links {
  display: flex;
  gap: 1.2rem;
}

.icon-only .social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.icon-only .social-icon svg {
  width: 26px;
  height: 26px;
  color: rgba(255, 255, 255, 0.85);
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Hover colors (brand-based) */
.icon-only .social-icon:hover svg {
  transform: translateY(-2px);
}

.icon-only .social-icon[aria-label="Facebook"]:hover svg {
  color: #1877f2;
}

.icon-only .social-icon[aria-label="TikTok"]:hover svg {
  color: #ffffff;
}

.icon-only .social-icon[aria-label="WhatsApp"]:hover svg {
  color: #25d366;
}



        /* ===== FOOTER BOTTOM ===== */
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.6);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .footer {
            padding: 6rem 2rem 2rem;
          }

          .footer-circle-image {
            width: 100px;
            height: 100px;
            border-width: 8px;
          }
        }
      `}</style>

      <footer className="footer">
        {/* Logo */}
        <div className="footer-circle-image">
          <img src={Assets.logo} alt="Spring Hill School" />
        </div>

        <div className="footer-content">
          {/* Find Us */}
          <div className="footer-section">
            <h3>Find Us</h3>
            <p>Spring Hill English Boarding School</p>
            <p>📍 Banepa, Kavre, Nepal</p>
            <p>📞 +977 984-1103044</p>
            <p>✉️ springhill607@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/About">About Us</a>
            <a href="/Events">Events</a>
            <a href="/Notice">Notice</a>
            <a href="/Contact">Contact Us</a>
          </div>

          {/* App + Social */}
          <div className="footer-section">
            <h3>Download App</h3>
            <p>Get our mobile application</p>

            <div className="store-buttons">
              <a href="#" className="store-btn">
                <img
                  src={Assets.AppStore}
                  alt="App Store"
                  className="store-img"
                />
              </a>
              <a href="#" className="store-btn">
                <img
                  src={Assets.PlayStore}
                  alt="Google Play"
                  className="store-img"
                />
              </a>
            </div>

            <h3 style={{ marginTop: "2rem" }}>Follow Us</h3>
            <div className="social-links icon-only">
              <a
                href="https://www.facebook.com/"
                className="social-icon"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.tiktok.com/"
                className="social-icon"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>

              <a
                href="https://wa.me/9779841103044"
                className="social-icon"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Spring Hill English Boarding School. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
