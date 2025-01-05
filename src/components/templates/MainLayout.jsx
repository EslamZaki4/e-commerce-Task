import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
      <div>
        <Header/>
        <main>{children}</main>
        <Footer  />
      </div>
    );
  };
  
  export default MainLayout;