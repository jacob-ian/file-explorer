import React, { useState } from "react";
import styles from "./CreateNewFileDialogTemplate.module.scss";
import { Cancel, Save } from "@mui/icons-material";
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "../../atoms/Button";
import useHandle from "../../../hooks/useHandle";

interface CreateNewFileDialogTemplateProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateNewFileDialogTemplate(
  props: CreateNewFileDialogTemplateProps
) {
  const { open, onClose } = props;
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const tree = useHandle();

  function handleNameInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setName(value);
  }

  function handleContentInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { value } = event.target;
    setContent(value);
  }

  async function handleSubmit() {
    if (name === "") {
      return setError("Name is required");
    }
    if (content === "") {
      return setError("Content is required");
    }
    const currentDir = tree[tree.length - 1];
    const newFile = await currentDir.getFileHandle(name, {
      create: true,
    });
    const writableStream = await newFile.createWritable();
    await writableStream.write(content);
    await writableStream.close();
    onClose();
  }

  return (
    <Dialog open={open}>
      <DialogTitle>New File</DialogTitle>
      <DialogContent className={styles.content}>
        <TextField
          autoFocus
          required
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameInputChange}
        />
        <TextField
          required
          multiline
          minRows={5}
          label="Content"
          variant="outlined"
          value={content}
          onChange={handleContentInputChange}
        />
        {error !== "" ? <Alert severity="error">{error}</Alert> : null}
      </DialogContent>
      <DialogActions>
        <Button label="Cancel" icon={<Cancel />} onClick={onClose} />
        <Button label="Save" icon={<Save />} onClick={handleSubmit} />
      </DialogActions>
    </Dialog>
  );
}
