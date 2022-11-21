import { Close } from "@mui/icons-material";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";

interface ViewFileDialogTemplateProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  fileHandle: FileSystemFileHandle;
}

export default function ViewFileDialogTemplate(
  props: ViewFileDialogTemplateProps
) {
  const { onClose, fileHandle } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getContent() {
      const file = await fileHandle.getFile();
      return file.text();
    }
    getContent().then((text) => {
      setContent(text);
      setIsLoading(false);
    });
  }, [fileHandle]);

  return (
    <Dialog open={true}>
      <DialogTitle>{fileHandle.name}</DialogTitle>
      <DialogContent>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <DialogContentText>{content}</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button label="Close" icon={<Close />} onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
}
