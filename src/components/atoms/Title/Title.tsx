import { Typography } from "@mui/material";
import React from "react";

interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  const { title } = props;
  return <Typography variant="h2">{title}</Typography>;
}
