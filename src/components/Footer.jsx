import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  const data = {
    location: "Delhi, India",
    phone: "8810593838",
    email: "rsfitness@gmail.com",
    instagram: "Your Instagram Link",
    whatsapp: "Your WhatsApp Number",
    youtube: "Your YouTube Link",
  };

  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-section">
          <div className="footer-column">
            <h5 className="footer-title">ABOUT</h5>
            <hr className="footer-divider" />
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  About Us
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-title">QUICK LINK</h5>
            <hr className="footer-divider" />
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="footer-link" href="">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-title">CONTACT US</h5>
            <hr className="footer-divider" />
            <ul className="footer-list">
              <li>
                <p className="contactIcon">
                  <IoLocationSharp />

                  {data.location}
                </p>
              </li>
              <li>
                <p className="contactIcon">
                  <MdLocalPhone />
                  {data.phone}
                </p>
              </li>
              <li>
                <p className="contactIcon">
                  <IoMail />
                  {data.email}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-icons">
            <a
              className="footer-icon-link"
              href={data.instagram}
              target="_blank"
            >
              <RiInstagramLine />
            </a>
            <a
              className="footer-icon-link"
              href={data.whatsapp}
              target="_blank"
            >
              <RiWhatsappLine />
            </a>
            <a className="footer-icon-link" href={data.youtube} target="_blank">
              <RiYoutubeFill />
            </a>
          </div>
        </div>
        <small className="footer-copyright">
          Copyright @ 2024 ~{" "}
          <a
            href="https://www.linkedin.com/in/adiar24/"
            target="_blank"
            className="footer-link"
          >
            Aditya Arya
          </a>
          ,
          <a
            href="https://vikas-0-3.github.io/myportfolio/"
            target="_blank"
            className="footer-link"
          >
            Vikas Gupta
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
