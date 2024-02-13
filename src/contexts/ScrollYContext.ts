import { createContext, useContext } from "react";

export const ScrollYContext = createContext<number>(-1);

export const useScrollYContext = () => useContext(ScrollYContext);
