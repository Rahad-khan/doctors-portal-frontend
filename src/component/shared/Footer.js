import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
    const currentYear = new Date().getFullYear(); 
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
    >
      <div className="footer p-10 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a href="#!" className="link link-hover">
            Branding
          </a>
          <a href="#!" className="link link-hover">
            Design
          </a>
          <a href="#!" className="link link-hover">
            Marketing
          </a>
          <a href="#!" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="#!" className="link link-hover">
            About us
          </a>
          <a href="#!" className="link link-hover">
            Contact
          </a>
          <a href="#!" className="link link-hover">
            Jobs
          </a>
          <a href="#!" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="#!" className="link link-hover">
            Terms of use
          </a>
          <a href="#!" className="link link-hover">
            Privacy policy
          </a>
          <a href="#!" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </div>
      <div className="my-6 text-center">
        <p>
          Copyright &copy; {currentYear} - All right reserved by Rahad Khan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
