import React from "react";
import styles from "./Breadcrumbs.module.scss";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  IconButton,
} from "@mui/material";
import useHandle from "../../../hooks/useHandle";
import useUpdateHandle from "../../../hooks/useUpdateHandle";
import { ArrowBack, FolderOpen } from "@mui/icons-material";

export default function Breadcrumbs() {
  const tree = useHandle();
  const updateTree = useUpdateHandle();

  function resetDirectory() {
    updateTree([]);
  }

  function handleBackButtonClick() {
    updateTree(tree.slice(0, tree.length - 1));
  }

  function handleBreadcrumbClick(index: number) {
    updateTree(tree.slice(0, index + 1));
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <IconButton onClick={() => resetDirectory()}>
          <FolderOpen />
        </IconButton>
        <MuiBreadcrumbs aria-label="breadcrumb">
          {tree.map((directory, i) => (
            <Button
              key={directory.name}
              variant="text"
              sx={{ textTransform: "none" }}
              onClick={() => handleBreadcrumbClick(i)}
            >
              {directory.name}
            </Button>
          ))}
        </MuiBreadcrumbs>
      </div>
      <Button
        disabled={tree.length === 1}
        variant="text"
        startIcon={<ArrowBack />}
        onClick={handleBackButtonClick}
      >
        Back
      </Button>
    </div>
  );
}
