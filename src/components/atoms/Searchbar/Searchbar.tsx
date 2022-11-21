import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFilter from "../../../hooks/useFilter";

export default function Searchbar() {
  const [filter, setFilter] = useFilter();
  const [localFilter, setLocalFilter] = useState(filter);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setLocalFilter(value);
  }

  useEffect(() => {
    let timeout = setTimeout(() => setFilter(localFilter), 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [localFilter, setFilter]);

  return (
    <TextField
      variant="outlined"
      fullWidth={true}
      label="Search"
      value={localFilter}
      onChange={handleSearchChange}
    />
  );
}
