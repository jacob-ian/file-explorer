import React, { useContext } from "react";
import { UpdateHandleContext } from "../context/handle";

export default function useUpdateHandle() {
  return useContext(UpdateHandleContext);
}
