import { createContext, useContext } from "react";
import { IMenuItem } from "../models/IMenuItem";

export type FoodItemsContent = IMenuItem[] | undefined;

export const FoodItemsContext = createContext<FoodItemsContent>([]);

export const useFoodItemsContext = () => useContext(FoodItemsContext);
