import React, { useContext } from "react";
import { RefreshContext } from "../context/refresh";

export default function useRefresh() {
  return useContext(RefreshContext);
}
