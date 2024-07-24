import LandingSection from "./components/LandingSection";
import TransformationSlider from "./components/TransformationSlider";
import "./App.css";
import NinetyTransformation from "./components/NinetyTransformation";

function App() {
  return (
    <>
      <div className="appWrapper">
        <LandingSection />
        <NinetyTransformation />
      </div>
    </>
  );
}

export default App;
