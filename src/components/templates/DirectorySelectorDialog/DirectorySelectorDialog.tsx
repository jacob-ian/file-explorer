import React from "react";
import { FolderOpen } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Button from "../../atoms/Button";
import useUpdateHandle from "../../../hooks/useUpdateHandle";

export default function DirectorySelectorDialog() {
  const updateHandle = useUpdateHandle();

  async function handleOpenFolderButton() {
    const handle = await window.showDirectoryPicker({
      startIn: "desktop",
    });
    updateHandle([handle]);
  }

  return (
    <Dialog open={true}>
      <DialogTitle>Select a Folder</DialogTitle>
      <DialogContent>
        <DialogContentText>Please select a folder to open.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          label="Open Folder"
          icon={<FolderOpen />}
          onClick={handleOpenFolderButton}
        />
      </DialogActions>
    </Dialog>
  );
}
