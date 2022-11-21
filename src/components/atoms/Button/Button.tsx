import React from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const { label, onClick, icon } = props;
  return (
    <MuiButton variant="outlined" onClick={onClick} startIcon={icon}>
      {label}
    </MuiButton>
  );
}
