import React, { useState } from "react";
import "./App.css";
import { MdGroups } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Model from "react-modal";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="main-bg">
      <div className="sec-one">
        <h1 className="top-heading">
          "Some people call this artificial intelligence, but the reality is
          this technology will enhance us. So, instead of artificial
          intelligence, I think we’ll augment our intelligence” - Ginni Rometty
          – Former CEO & President, IBM
        </h1>
        <div className="sec-one-mid">
          <img
            src="https://resources.commlabindia.com/hs-fs/hubfs/webinars/corporate-training-with-ai-banner-image.png?width=525&height=734&name=corporate-training-with-ai-banner-image.png"
            className="sec-one-img"
            alt="lady"
          />
          <div className="sec-one-card">
            <p className="card-cap">The Top Trending Topic of the Year</p>
            <h2 className="card-head">
              Unleashing the Potential of AI in Corporate Training
            </h2>
            <hr className="line" />
            <div>
              <div className="item-sec">
                <img
                  className="item-icon"
                  src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                  alt="tik"
                />
                <p className="card-item">
                  Learn how AI is helping corporates upskill and reskill
                  workforce
                </p>
              </div>
              <div className="item-sec">
                <img
                  className="item-icon"
                  src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
                  alt="tik"
                />
                <p className="card-item">
                  {" "}
                  Walk away with tips, tools, and resources to get started with
                  AI-empowered training
                </p>
              </div>
            </div>
            <h2 className="mid-head">
              JOIN DR RK Prasad, Shalini, Rajesh LIVE
            </h2>
            <p className="schedule">
              Tuesday, January 09, 202411 AM Eastern | 8 AM Pacific Duration: 90
              Minutes
              <br />
              <span className="price">$997 VALUE</span>
              <span className="free">FREE!</span>
            </p>

            <button
              type="button"
              onClick={() => setVisible(true)}
              className="booking-btn"
            >
              <MdGroups className="group-icon" /> SECURE YOUR SEAT
            </button>

            <div className="model-container">
              <Model
                isOpen={visible}
                style={{
                  content: {
                    padding: "50px",
                    width: "700px",
                    height: "440px",
                    margin: "auto",
                  },
                }}
              >
                <div className="model-head-sec">
                  <h1 className="model-head">Register For The FREE Webinar</h1>
                  <button
                    type="button"
                    onClick={() => setVisible(false)}
                    className="colse-btn"
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                <form>
                  <div className="input-sec">
                    <div className="input-mini">
                      <label htmlFor="firstname">First Name</label>
                      <input
                        type="text"
                        id="firstname"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="input-mini lastname">
                      <label htmlFor="secondname">Last Name</label>
                      <input
                        type="text"
                        id="secondname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="input-mini">
                    <label htmlFor="secondname">Business Email</label>
                    <input
                      type="text"
                      id="secondname"
                      placeholder="Business Email"
                      className="input"
                    />
                  </div>

                  <div className="input-mini">
                    <label htmlFor="secondname">Phone Number</label>
                    <input
                      type="text"
                      id="secondname"
                      placeholder="Phone Number"
                      className="input"
                    />
                  </div>

                  <div className="model-btn-sec">
                    <button
                      type="button"
                      onClick={() => setVisible(true)}
                      className="model-btn"
                    >
                      SECURE YOUR SEAT
                    </button>
                  </div>
                </form>
              </Model>
            </div>
          </div>
        </div>
        <div className="company-sec">
          <img
            src="https://resources.commlabindia.com/hubfs/webinars/logos-v2.png"
            alt="companys"
            className="company"
          />
        </div>
      </div>
      <div className="learn-sec">
        <h1 className="learn-head">You will Learn:</h1>
        <div>
          <div className="item-sec">
            <img
              className="item-icon"
              src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
              alt="tik"
            />
            <p className="card-item item">
              Evolution of AI and Corporate Training
            </p>
          </div>

          <div className="item-sec">
            <img
              className="item-icon"
              src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
              alt="tik"
            />
            <p className="card-item item">
              How AI can close skills gaps with rapid upskilling and reskilling
            </p>
          </div>

          <div className="item-sec">
            <img
              className="item-icon"
              src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
              alt="tik"
            />
            <p className="card-item item">
              {" "}
              Steps to integrate AI tools in training programs
            </p>
          </div>

          <div className="item-sec">
            <img
              className="item-icon"
              src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
              alt="tik"
            />
            <p className="card-item item">
              {" "}
              Challenges and opportunities with AI implementation
            </p>
          </div>

          <div className="item-sec">
            <img
              className="item-icon"
              src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
              alt="tik"
            />
            <p className="card-item item">
              Roadmap to align training with business goals
            </p>
          </div>

          <div className="item-sec">
            <img
              className="item-icon"
              src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
              alt="tik"
            />
            <p className="card-item item">
              Live action – creating assets with Vyond Go, Synthesia, Quizbot
            </p>
          </div>

          <div className="item-sec">
            <img
              className="item-icon"
              src="https://resources.commlabindia.com/hubfs/cli-main-site/pillar-pages/checkmark-orange.svg"
              alt="tik"
            />
            <p className="card-item item">
              {" "}
              Best way Learning Architects can use AI
            </p>
          </div>
        </div>

        <h1 className="learn-head-two">
          Unleashing the Potential of <br /> AI in Corporate Training
        </h1>

        <p className="card-item item">
          The Impact of AI on L&D – Insights and Applications
        </p>
        <h2 className="learn-schedul">
          Tuesday, January 09, 2024 11 am Eastern | 8 am Pacific Duration: 90
          Minutes
        </h2>
        <div className="booking-button" onClick={() => setVisible(true)}>
          <MdGroups className="group-icon" />{" "}
          <p className="btn-tex">
            SECURE YOUR SEAT
            <br /> <span className="price-text">$997 VALUE </span>{" "}
            <span className="free">- FREE!</span>{" "}
          </p>{" "}
        </div>

        <div className="host-sec">
          <h1 className="host-head">MEET YOUR HOSTS</h1>

          <div className="host-min-sec">
            <div className="host-card">
              <img
                src="https://resources.commlabindia.com/hubfs/webinars/rk-prasad-ai-webinar.jpg"
                alt="host"
                className="host-image"
              />
              <h2 className="host-name">RK Prasad</h2>
              <h4 className="host-role">CEO & Co-Founder </h4>
              <p className="host-desc">
                RK has nurtured CommLab India from concept to commercial
                success, and is responsible for formulating the business
                strategy. He is also responsible for nurturing customer
                relationships. <br />
                <br />
                An entrepreneur at heart, RK has 35 years of experience in
                Sales, Corporate training, University teaching, and eLearning.
                He regularly conducts seminars and webinars for customers across
                the world on various topics of technology-enhanced learning.
                <br />
                <br />
                RK holds a PhD in Mobile Learning from Lancaster University, UK,
                and an MBA.
                <br />
                <br />
              </p>
            </div>

            <div className="host-card">
              <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/about-us/Shalini.jpg"
                alt="host"
                className="host-image"
              />
              <h2 className="host-name">Shalini Merugu</h2>
              <h4 className="host-role">Director - Learning Solutions </h4>
              <p className="host-desc">
                Shalini is a versatile learning design professional with 16+
                years of experience in instructional design (ILT, VILT, and
                eLearning). <br />
                <br />
                Her experience in designing eLearning solutions along with
                designing and delivering instructor-led training helps her
                leverage the strengths of each medium to consistently create
                impactful training solutions, ensuring that nothing is lost when
                converting from one format to another.
                <br />
                <br />
                Apart from improving the quality of learning solutions, she also
                conducts customer education workshops at customer sites globally
                and presents webinars on learning design.
                <br />
                <br />
              </p>
            </div>

            <div className="host-card">
              <img
                src="https://resources.commlabindia.com/hubfs/cli-main-site/about-us/rajesh-v4.jpg"
                alt="host"
                className="host-image"
              />
              <h2 className="host-name">Rajesh Venkata</h2>
              <h4 className="host-role">Director – Innovation </h4>
              <p className="host-desc">
                Rajesh started his career as a Quality Executive in 2008, and
                gained expertise in eLearning, digital content delivery, and
                project management, over these 15+ years.
                <br />
                <br />
                Rajesh started his career as a Quality Executive in 2008, and
                gained expertise in eLearning, digital content delivery, and
                project management, over these 15+ years.
                <br />
                <br />
                Well-experienced in managing multiple projects for global
                clients, Rajesh has a keen eye for trends in the tech-enabled
                learning space. This made him the natural choice for the current
                role, where he researches the latest tools and tech, and guides
                the CommLab India team in leveraging them to address training
                needs faster, better, and er.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-sec">
        <h1 className="bottum-sec-head">
          Unleashing the Potential of AI in Corporate Training
        </h1>
        <p className="head-desc">
          The Impact of AI on L&D – Insights and Applications
        </p>
        <h3 className="last-schedule">
          Tuesday, January 09, 2024
          <br />
          11 am Eastern | 8 am Pacific
          <br />
          Duration: 90 Minutes
        </h3>
        <div className="booking-button" onClick={() => setVisible(true)}>
          <MdGroups className="group-icon" />{" "}
          <p className="btn-tex">
            SECURE YOUR SEAT
            <br /> <span className="price-text">$997 VALUE </span>{" "}
            <span className="free">- FREE!</span>
          </p>{" "}
        </div>
      </div>
      <div className="footer-sec">
        <div className="logo-sec">
          <img
            src="https://resources.commlabindia.com/hubfs/commlab_logo/cl-logo-final-white.png"
            alt="foot-logo"
            className="foot-logo"
          />
          <p className="logo-below-text">Copyright © 2023, CommLab India</p>
        </div>
        <div className="foot-link-sec">
          <a
            href="https://www.commlabindia.com/privacy-policy"
            className="site-map"
          >
            Privacy Policy
          </a>
          <p className="slash">|</p>
          <a href="https://www.commlabindia.com/sitemap" className="site-map">
            {" "}
            Site Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
