import React, { useState } from "react";
import { Card } from "@mui/material";
import styles from "./Directory.module.scss";
import File from "../../molecules/File";
import Folder from "../../molecules/Folder";
import useCurrentDirectory from "../../../hooks/useCurrentDirectory";
import ViewFileDialogTemplate from "../../templates/ViewFileDialogTemplate";
import useUpdateHandle from "../../../hooks/useUpdateHandle";
import useFilter from "../../../hooks/useFilter";

export default function Directory() {
  const items = useCurrentDirectory();
  const [filter] = useFilter();
  const updateTree = useUpdateHandle();
  const [openFile, setOpenFile] = useState<FileSystemFileHandle | null>(null);

  function handleItemClick(item: FileSystemHandle) {
    if (item.kind === "file") {
      return setOpenFile(item as FileSystemFileHandle);
    }

    if (item.kind !== "directory") {
      return;
    }

    updateTree((tree) => [...tree, item as FileSystemDirectoryHandle]);
  }

  return (
    <Card
      style={{ overflow: "auto" }}
      variant="outlined"
      className={styles.container}
    >
      {openFile !== null ? (
        <ViewFileDialogTemplate
          fileHandle={openFile}
          onClose={() => setOpenFile(null)}
        />
      ) : null}
      {items
        .filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((item) =>
          item.kind === "directory" ? (
            <Folder
              key={item.name}
              name={item.name}
              onClick={() => handleItemClick(item)}
              selected={false}
            />
          ) : (
            <File
              key={item.name}
              name={item.name}
              onClick={() => handleItemClick(item)}
              selected={false}
            />
          )
        )}
    </Card>
  );
}
