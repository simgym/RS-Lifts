import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = (props) => {
  // console.log("scrollToSection prop in RootLayout:", props.scrollToSection);

  return (
    <>
      <div className="landNavWrapper">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
