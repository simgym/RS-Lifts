import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = (props) => {

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
