import "./IndividualProfile.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../images/AvatarTest.svg";
import LargeAvatar from "../../images/LargeTestAvatar.svg";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function IndividualProfile({ handleLogInClick, activeModal }) {
  const [typeOfHeader, setTypeOfHeader] = useState("profile");

  const [skills, setSkills] = useState([
    "I’m Tall for My Age",
    "Traveling Around",
    "Taking Down Bad Guys",
    "Being Sweet",
    "Brotherhood Founder",
  ]);

  const [generalInfo, setGeneralInfo] = useState([
    "Link: http://madeofmetal.com",
    "Location: Central City",
  ]);

  const [education, setEducation] = useState([
    { degree: "Degree", fieldOfStudy: "Field of Study", school: "School Name" },
    {
      degree: "Other Degree",
      fieldOfStudy: "Second Field of Study",
      school: "Rival School Name",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      jobTitle: "Job Title",
      company: "Company Name",
      jobDescription:
        "Job description - here’s what I did and why it mattered and details and all that. In short, I did stuff. It was cool.",
    },
    {
      jobTitle: "Other Job Title",
      company: "Rival Company Name",
      jobDescription:
        "This special job description - here’s what I did and why it mattered and details and all that. In short, I did stuff. It was cool.",
    },
  ]);

  const [passionateAbout, setPassionateAbout] = useState(
    "Alchemy, it’s rules, the way you should respect it and never try to bring anyone back from the dead."
  );

  const [lookingFor, setLookingFor] = useState(
    "Integrity. Honesty. Some way I can help people."
  );

  const [quirksHobbies, setQuirksHobbies] = useState(
    "I like to transform some elements into other elements."
  );

  const [aboutMe, setAboutMe] = useState(
    "Alphonse Elric is the younger brother of Edward Elric, the Fullmetal Alchemist, Al is also a victim of the failed Human Transmutation experiment that lost Ed his right arm and left leg. Having had his entire physical being taken away from him in the aftermath."
  );

  return (
    <>
      <Header
        handleLogInClick={handleLogInClick}
        activeModal={activeModal}
        typeOfHeader={typeOfHeader}
      />
      <div className="personal__profile">
        <div className="profile__buttons"></div>
        <div className="profile__info profile__name-avatar-small-bio">
          <div className="profile__name-avatar">
            <img
              src={LargeAvatar}
              alt="Jenny Sukut Avatar"
              className="profile__avatar"
            />
            <h1 className="profile__name">Alphonse Elric</h1>
          </div>
          <p className="profile__small-bio">
            Can’t wait till I get my real body back so I can finally eat all
            this food on my list! Oh, also, I know alchemy.
          </p>
        </div>

        <div className="personal__profile-info-sections">
          <div className="profile__column">
            <div className="profile__info skills">
              <h3 className="profile__info-title skills-title">Skills:</h3>
              {skills.map((skill) => {
                return <p className="skill">{skill}</p>;
              })}
            </div>

            <div className="profile__info education">
              <h3 className="profile__info-title">My Education:</h3>
              {education.map((edu) => {
                return (
                  <div className="education__info">
                    <p className="education__degree">
                      {edu.degree},
                      <span className="education__fos">
                        {" "}
                        {edu.fieldOfStudy}
                      </span>
                    </p>
                    <p className="education__school">{edu.school}</p>
                  </div>
                );
              })}
            </div>
            <div className="profile__buttons">
              <button className="profile__button profile__edit-button">
                edit
              </button>
              <Link to="/settings">
                <button className="profile__button profile__settings-button">
                  settings
                </button>
              </Link>
            </div>
          </div>

          <div className="profile__column">
            <div className="profile__info passionate-about">
              <h3 className="profile__info-title">I'm Passionate About:</h3>
              {passionateAbout}
            </div>
            <div className="profile__info looking-for">
              <h3 className="profile__info-title">What I'm Looking For:</h3>
              {lookingFor}
            </div>
            <div className="profile__info more-about-me">
              <h3 className="profile__info-title">More About Me:</h3>
              {aboutMe}
            </div>
          </div>

          <div className="profile__column">
            <div className="profile__info general-info">
              {generalInfo.map((info) => {
                return <p className="info">{info}</p>;
              })}
            </div>

            <div className="profile__info experience">
              <h3 className="profile__info-title">My Experience:</h3>
              {experience.map((exp) => {
                return (
                  <div className="experience__info">
                    <p className="experience__job-title">
                      {exp.jobTitle},
                      <span className="experience__company">
                        {" "}
                        {exp.company}
                      </span>
                    </p>
                    <p className="experience job-description">
                      {exp.jobDescription}
                    </p>
                  </div>
                );
              })}
            </div>
            {quirksHobbies !== "" ? (
              <div className="profile__info quirks-hobbies">
                <h3 className="profile__info-title">Quirks / Hobbies</h3>
                <p className="quirks-hobbies-info">{quirksHobbies}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IndividualProfile;
