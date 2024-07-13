import "./About.css";

import { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import MutuallyBeneficial from "../../images/MutualBeneficialityArtwork.svg";

function About({ handleLogInClick, activeModal }) {
  const [footerIsFixed, setFooterIsFixed] = useState("false");

  return (
    <>
      <Header handleLogInClick={handleLogInClick} activeModal={activeModal} />
      <div className="about">
        <h1 className="about__title">about us:</h1>
        <div className="about__details">
          <p className="about__detail about__detail-1">
            The current job market & common hiring practices are abysmal
          </p>
          <p className="about__detail about__detail-2">
            It’s dehumanizing for applicants & overwhelming for recruiters.
          </p>
          <p className="about__detail about__detail-3">
            <span className="detail-bold">
              {" "}
              The process is inefficient for everyone involved:{" "}
            </span>
            hiring managers sort through a mountains of applications for each
            listing while people looking for positions have to submit far too
            many applications before getting an interview.
          </p>
          <p className="about__detail about__detail-4">it should be simple.</p>
          <div></div>
          <p className="about__detail about__detail-5">
            ... and so we created this
            <span className="detail-bold"> straightforward job site</span>
            to help make it that way.
          </p>
        </div>
        <div className="about__illustration-group">
          <p className="about__detail about__detail-6">
            real people with skills, ready to help for fair compensation.
          </p>
          <img
            src={MutuallyBeneficial}
            alt="MutuallyBeneficialArt"
            className="about__illustration"
          />
          <p className="about__detail about__detail-7">
            businesses that need real people's help, can compensate fairly.
          </p>
          <div className="about__ill-detail">
            <p className="about__detail about__detail-8">
              All you have to do is bring the two together, connecting the
              people that can help each other.{" "}
            </p>
            <p className="about__detail about__detail-9">
              with a few rules so that everything can run smoothly & everyone is
              on the same page. check out our process page for more details
            </p>
          </div>
        </div>
      </div>
      <Footer footerIsFixed={footerIsFixed} />
    </>
  );
}

export default About;
