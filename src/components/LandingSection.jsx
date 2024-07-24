import landingImg from "../assets/6O9A2380.jpg";
import Navbar from "./Navbar";
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <div className="landpageWrapper">
      <div className="landNavWrapper">
        <Navbar />
      </div>
      {/* <div className="landSectionWrapper">
        <div className="landSectionCont">
          <span className="landSecHead">
            <h2>
              Build your body into{" "}
              <span style={{ color: "#e15119" }}>healthy</span> and{" "}
              <span style={{ color: "#e15119" }}>strong</span> body
            </h2>
          </span>
          <span className="landSecQuote">
            <p>
              Achieve natural fitness and health through expert guidance. Make
              fitness a part of everyday life for a happy, healthy lifestyle.
              Focus on holistic well-being to live with energy, confidence, and
              longevity. Simple knowledge for a better life.
            </p>
          </span>
          <span className="landSecButton">
            <button>Get Started</button>
          </span>
        </div>
        <div className="landSectionImg">
          <img src={landingImg} />
        </div>
      </div> */}
      <div className="landSectionWrapper">
        <div className="landSectionCont">
          <p>DETERMINATION</p>
          <p>ACTION</p>
          <p>TRANSFORMATION</p>
        </div>
        <div className="landSectionImg">
          <img src={landingImg} />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
