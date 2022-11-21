import React, { useContext } from "react";
import { HandleContext } from "../context/handle";

export default function useHandle() {
  return useContext(HandleContext);
}
