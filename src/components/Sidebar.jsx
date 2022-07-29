import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <div className="icons linkedin text-light fs-3 d-flex justify-content-between align-items-center">
        <Link
          to="//www.linkedin.com/in/mehmet%C3%A7ak%C4%B1r43/"
          target="_blank"
        >
          Linkedin
        </Link>
        <span className="display-5 d-flex align-items-center p-2">
          <BsLinkedin />
        </span>
      </div>

      <div className="icons github text-light text-light fs-3 d-flex justify-content-between align-items-center">
        <Link to="//github.com/MehmetCakir1" target="_blank">
          Github
        </Link>
        <span className="display-5 d-flex align-items-center p-2">
          <BsGithub />
        </span>{" "}
      </div>

      <div className="icons email text-light fs-3 d-flex justify-content-between align-items-center">
        <a href="mailto:mehmetcakir4227@gmail.com" target="_blank">
          Email
        </a>
        <span className="display-5 d-flex align-items-center p-2">
          <BsFillEnvelopeFill />
        </span>
      </div>

      <div className="icons resume text-light fs-3 d-flex justify-content-between align-items-center">
        <Link to="/resume">Resume</Link>
        <span className="display-5 d-flex align-items-center p-2">
          <BsFillPersonLinesFill />
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
