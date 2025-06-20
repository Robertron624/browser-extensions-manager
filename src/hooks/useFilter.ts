import { useContext } from "react";
import { FilterContext } from "../context/FilterContextInstance";
import { FilterContextType } from "../types";

/**
 * Custom hook to access the filter context.
 * 
 * @returns {FilterContextType} The filter context value.
 */
export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}