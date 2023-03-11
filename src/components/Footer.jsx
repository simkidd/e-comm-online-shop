import React from "react";
import { TfiFacebook, TfiTwitterAlt } from "react-icons/tfi";
import Western from "../assets/Western-union.png";
import Master from "../assets/mastercard.png";
import PayPal from "../assets/Paypal.png";
import Visa from "../assets/Visa.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-top">
        <div>
          <span>
            <img src={require("../assets/Icon.png")} alt="" />
            E-comm
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum as been the industry's standard dummy text
            ever sice the 1500s, when an unknown printer.
          </span>
        </div>
        <div>
          <span>Follow Us</span>
          <span>
            Since the 1500s, when an unknown printer took a gallery of type and
            scrambled.
          </span>
          <span>
            <span>
              <TfiFacebook />
            </span>
            <span>
              <TfiTwitterAlt />
            </span>
          </span>
        </div>
        <div>
          <span>Contact Us</span>
          <span>E-Comm, 4578 Marmora Road, Glasgow DD4 89GR</span>
        </div>
      </div>
      <div className="f-mid">
        <div>
          <span>Information</span>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <span>Service</span>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <span>My Account</span>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <span>Our Offers</span>
          <ul>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="f-bottom">
        <hr />
        <div>
          <span>&copy; 2023 Designed by &lt; oniDev /&gt;</span>
          <span>
            <img src={Western} alt="" />
            <img src={Master} alt="" />
            <img src={PayPal} alt="" />
            <img src={Visa} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
