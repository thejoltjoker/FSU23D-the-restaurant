import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FoodItemsContext } from "../contexts/FoodItemsContext";
import { IMenuItem } from "../models/IMenuItem";
import { IMenuResponse } from "../models/IMenuResponse";
import { get } from "../services/http";

const Layout = () => {
  const [foodItems, setFoodItems] = useState<IMenuItem[]>();

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
        <FoodItemsContext.Provider value={foodItems}>
          <Outlet />
        </FoodItemsContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
