import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "../../atoms/Button";
import { Cancel, CreateNewFolder } from "@mui/icons-material";
import useHandle from "../../../hooks/useHandle";

interface CreateNewFolderDialogTemplateProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateNewFolderDialogTemplate(
  props: CreateNewFolderDialogTemplateProps
) {
  const { open, onClose } = props;
  const [name, setName] = useState("");
  const tree = useHandle();

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setName(value);
  }

  async function handleCreateClick() {
    const current = tree[tree.length - 1];
    await current.getDirectoryHandle(name, { create: true });
    onClose();
  }

  return (
    <Dialog open={open}>
      <DialogTitle>New Folder</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ width: 300 }}
          autoFocus
          required
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
      </DialogContent>
      <DialogActions>
        <Button label="Cancel" icon={<Cancel />} onClick={onClose} />
        <Button
          label="Create"
          icon={<CreateNewFolder />}
          onClick={handleCreateClick}
        />
      </DialogActions>
    </Dialog>
  );
}
