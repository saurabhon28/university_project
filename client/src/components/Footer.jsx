import { Link } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import Cources from "./Courses";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithubAlt } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social">
        <Link className="social-links" to="https://www.facebook.com/">
          <TiSocialFacebook />
        </Link>
        <Link className="social-links" to="https://github.com/">
          <FaGithubAlt />
        </Link>
        <Link className="social-links" to="https://twitter.com/?lang=en">
          <IoLogoTwitter />
        </Link>

        <Link className="social-links" to="https://www.instagram.com/">
          <FaInstagramSquare />
        </Link>
      </div>
      <div className="links">
        <Link
          style={{ textDecoration: "none", margin: "15px" }}
          to="/services"
          element={<Services />}>
          Services
        </Link>
        <Link
          style={{ textDecoration: "none", margin: "15px" }}
          to="/about"
          element={<About />}>
          About
        </Link>
        <Link
          style={{ textDecoration: "none", margin: "15px" }}
          to="/cources"
          element={<Cources />}>
          Cources
        </Link>
      </div>
    </div>
  );
}

export default Footer;
