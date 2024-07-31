import LandingSection from "./components/LandingSection";
import TransformationSlider from "./components/TransformationSlider";
import NinetyTransformation from "./components/NinetyTransformation";
import Plans from "./components/Plans";
import Discount from "./components/Discount";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import CoachSection from "./components/CoachSection";
import Combos from "./components/Combos";
import "./App.css";

function App() {
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShowDiscount(true);
    }, 3000);
    const interval = setInterval(() => {
      setShowDiscount(true);
    }, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
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
        <Combos />
        <CoachSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
