import React, { createContext, Dispatch, SetStateAction } from "react";

const RefreshContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["init", (() => {}) as Dispatch<SetStateAction<string>>]);

export { RefreshContext };
