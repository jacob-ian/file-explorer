import React, { createContext, Dispatch, SetStateAction } from "react";

const FilterContext = createContext<[string, Dispatch<SetStateAction<string>>]>(
  ["", (() => {}) as Dispatch<SetStateAction<string>>]
);

export { FilterContext };
