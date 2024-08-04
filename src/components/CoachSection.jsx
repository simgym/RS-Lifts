import coachImg from "../assets/coach.jpg";
import { RiInstagramLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import "./CoachSection.css";

const CoachSection = () => {
  const data = {
    instagram: "",
    whatsapp: "",
    youtube: "",
  };
  return (
    <div className="coach-container">
      <div className="coach-inner">
        <div className="coach-title">
          <h2>Meet Your Coach</h2>
        </div>
        <div className="coach-details">
          {/* <h1 className="coach-name">Rohit Sharma</h1> */}
          <div className="coach-imgDesc">
            <div className="coach-image-container">
              <img src={coachImg} className="coach-image" alt="Coach" />
            </div>
            <div className="coach-description">
              Rohit Sharma is a certified fitness Trainer & Certified Crossfit
              trainer With 18+ years of Coaching Experience & has trained over
              25,000 Clients offline and online in fitness industry. He also
              many titles in bodybuilding and men’s physique fitness model
              categories, which mainly including Mr. Delhi 1st Place
              Bodybuilding, Mr. YMCA 3rd in 2013, Bodypowet India Men’s Physique
              (Top 5 Overall India) in 2015, Mr India Jera Classic Phya, Top 3,
              Overall India in 2017.
            </div>
          </div>
          <div className="coach-learn-Social">
            {" "}
            <div className="coach-social-icons">
              <a
                href={data.instagram}
                target="_blank"
                className="coach-social-link"
              >
                <RiInstagramLine />
              </a>
              <a
                href={`https://wa.me/${data.whatsapp}?text=Hello,%20Rohit%20Sharma`}
                target="_blank"
                className="coach-social-link"
              >
                <RiWhatsappLine />
              </a>
              <a
                href={data.youtube}
                target="_blank"
                className="coach-social-link"
              >
                <RiYoutubeFill />
              </a>
            </div>
            <div className="coach-learn-more">
              <a className="coach-learn-more-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachSection;
