import LandingSection from "./components/LandingSection";
import TransformationSlider from "./components/TransformationSlider";
import NinetyTransformation from "./components/NinetyTransformation";
import Plans from "./components/Plans";
import Discount from "./components/Discount";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import CoachSection from "./components/CoachSection";
import "./App.css";

function App() {
  const [showDiscount, setShowDiscount] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowDiscount(true);
    }, 3000);
  }, []);
  return (
    <>
      <div className="appWrapper">
        {showDiscount && (
          <div className="dsBackdrop">
            <Discount setShowDiscount={setShowDiscount} />
          </div>
        )}
        <LandingSection />
        <NinetyTransformation />
        <Plans />
        <CoachSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
