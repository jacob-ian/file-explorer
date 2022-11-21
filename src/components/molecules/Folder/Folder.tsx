import React from "react";
import DirectoryItem from "../DirectoryItem";
import FolderIcon from "@mui/icons-material/Folder";

interface FolderProps {
  name: string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export default function Folder(props: FolderProps) {
  const { name, selected, onClick } = props;
  return (
    <DirectoryItem
      name={name}
      icon={<FolderIcon fontSize="large" />}
      selected={selected}
      onClick={onClick}
    />
  );
}
