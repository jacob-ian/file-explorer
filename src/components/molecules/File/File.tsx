import { InsertDriveFile } from "@mui/icons-material";
import React from "react";
import DirectoryItem from "../../molecules/DirectoryItem";

interface FileProps {
  name: string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function File(props: FileProps) {
  const { name, selected, onClick } = props;
  return (
    <DirectoryItem
      name={name}
      selected={selected}
      onClick={onClick}
      icon={<InsertDriveFile fontSize="large" />}
    />
  );
}
