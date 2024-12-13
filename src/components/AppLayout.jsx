import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Fotter from "./Fotter";

const AppLayout = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Fotter />
      </div>
    </div>
  );
};

export default AppLayout;
