import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ScrollYContext } from "../contexts/ScrollYContext";

const Layout = () => {
  const [scrollY, setScrollY] = useState(-1);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  if (scrollY === -1) {
    setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <>
      <Navbar />
      <main>
        <ScrollYContext.Provider value={scrollY}>
          <Outlet />
        </ScrollYContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
