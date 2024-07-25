import LandingSection from "./components/LandingSection";
import TransformationSlider from "./components/TransformationSlider";
import "./App.css";
import NinetyTransformation from "./components/NinetyTransformation";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <div className="appWrapper">
        <LandingSection />
        <NinetyTransformation />
        <Plans />
      </div>
    </>
  );
}

export default App;
