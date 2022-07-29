import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  // BsEnvelope,
} from "react-icons/bs";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <article className="d-flex justify-content-center contact gap-2 flex-column flex-sm-row flex-wrap align-items-center">
      <div className="text-light d-flex justify-content-center align-items-center contactLinkedin p-4 ">
        <Link
          to="//www.linkedin.com/in/mehmet%C3%A7ak%C4%B1r43/"
          target="_blank"
        >
          <span className="display-2 d-flex align-items-center rounded-3">
            <BsLinkedin />
          </span>
        </Link>
      </div>
      <div className="text-light text-light  d-flex justify-content-center align-items-center contactGithub p-4">
        <Link to="//github.com/MehmetCakir1" target="_blank">
        <span className="display-2 d-flex align-items-center rounded-circle">
          <BsGithub />
        </span>
        </Link>
      </div>
      <div className=" text-light  d-flex justify-content-center align-items-center contactEmail p-4  ">
        <a href="mailto:mehmetcakir4227@gmail.com" target="_blank">
        <span className="display-2 d-flex align-items-center justify-content-center ">
          <BsFillEnvelopeFill/>
        </span>
        </a>

      </div>
    </article>
  );
};

export default Contact;
