import React, { useContext } from "react";
import { FilterContext } from "../context/filter";

export default function useFilter() {
  return useContext(FilterContext);
}
