import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FoodItemsContext } from "../contexts/FoodItemsContext";
import { ScrollYContext } from "../contexts/ScrollYContext";
import { IMenuItem } from "../models/IMenuItem";
import { IMenuResponse } from "../models/IMenuResponse";
import { get } from "../services/http";

const Layout = () => {
  const [foodItems, setFoodItems] = useState<IMenuItem[]>();
  const [scrollY, setScrollY] = useState(-1);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  if (scrollY === -1) {
    setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
  }

  useEffect(() => {
    if (foodItems) return;
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await get<IMenuResponse>(
          `${import.meta.env.BASE_URL}api/menu.json`,
        );
        if (!ignore) setFoodItems(response.items);
      } catch (error) {
        console.error("Error while fetching food items");
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  });

  return (
    <>
      <Navbar />
      <main>
        <ScrollYContext.Provider value={scrollY}>
          <FoodItemsContext.Provider value={foodItems}>
            <Outlet />
          </FoodItemsContext.Provider>
        </ScrollYContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
