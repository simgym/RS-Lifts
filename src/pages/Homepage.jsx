import LandingSection from "../components/LandingSection";
import NinetyTransformation from "../components/NinetyTransformation";
import Plans from "../components/Plans";
import Combos from "../components/Combos";
import CoachSection from "../components/CoachSection";
import Footer from "../components/Footer";
import Discount from "../components/Discount";
import { useState } from "react";
import "./Homepage.css";

const Homepage = ({ setShowDiscount, showDiscount }) => {
  //   const [showDiscount, setShowDiscount] = useState(false);

  return (
    <div className="homeWrap">
      {showDiscount && (
        <div className="dsBackdrop">
          <Discount setShowDiscount={setShowDiscount} />
        </div>
      )}
      <LandingSection />
      <NinetyTransformation />
      <Plans />
      <Combos />
      <CoachSection />
      <Footer />
    </div>
  );
};

export default Homepage;
