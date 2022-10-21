import {
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
  // BsEnvelope,
} from "react-icons/bs";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="d-flex flex-wrap justify-content-center align-items-center gap-4 flex-wrap p-5 contact-container">
		<div className="contact-card" >
				<div className="container">
					<div className="front front-1">
						<div className="inner">
							<p className="fs-2">LINKEDIN</p>
						</div>
					</div>
					<div className="back">
						<div className="inner d-flex justify-content-center align-items-center">
            <Link
          to="//www.linkedin.com/in/mehmet%C3%A7ak%C4%B1r43/"
          target="_blank"
        >
          <span className="display-2 d-flex align-items-center rounded-3">
            <BsLinkedin />
          </span>
        </Link>
						</div>
					</div>
				</div>
			</div>
		<div className="contact-card" >
				<div className="container">
					<div className="front front-2">
						<div className="inner">
            <p className="fs-2">GITHUB</p>
						</div>
					</div>
					<div className="back">
            <div className="inner d-flex justify-content-center align-items-center">
            <Link to="//github.com/MehmetCakir1" target="_blank">
        <span className="display-2 d-flex align-items-center rounded-circle">
          <BsGithub className="github-contact"/>
        </span>
        </Link>
						</div>
					</div>
				</div>
			</div>
		<div className="contact-card" >
				<div className="container">
					<div className="front front-3">
						<div className="inner">
							<p>EMAIL</p>
						</div>
					</div>
					<div className="back">
          <div className="inner d-flex justify-content-center align-items-center ">
          <a href="mailto:mehmetcakir4227@gmail.com" target="_blank">
        <span className="display-2 d-flex align-items-center justify-content-center ">
          <BsFillEnvelopeFill className="email-contact"/>
        </span>
        </a>
						</div>
					</div>
				</div>
			</div>
    </main>
  );
};

export default Contact;
