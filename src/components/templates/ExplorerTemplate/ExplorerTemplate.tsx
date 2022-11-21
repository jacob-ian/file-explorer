import React, { useState } from "react";
import { Card } from "@mui/material";
import Button from "../../atoms/Button";
import Searchbar from "../../atoms/Searchbar";
import Title from "../../atoms/Title";
import styles from "./ExplorerTemplate.module.scss";
import { Add, CreateNewFolder } from "@mui/icons-material";
import Breadcrumbs from "../../organisms/Breadcrumbs";
import LocationInfo from "../../atoms/LocationInfo";
import Directory from "../../organisms/Directory";
import CreateNewFileDialogTemplate from "../CreateNewFileDialogTemplate/CreateNewFileDialogTemplate";
import CreateNewFolderDialogTemplate from "../CreateNewFolderDialogTemplate";
import useRefresh from "../../../hooks/useRefresh";

export default function ExplorerTemplate() {
  const [openCreateFile, setOpenCreateFile] = useState(false);
  const [openCreateFolder, setOpenCreateFolder] = useState(false);
  const [_, setRefreshId] = useRefresh();

  function handleCreateFileClick() {
    setOpenCreateFile(true);
  }

  function handleCreateFolderClick() {
    setOpenCreateFolder(true);
  }

  function handleOnFileCreateClose() {
    setOpenCreateFile(false);
    setRefreshId(`${Math.random()}`);
  }

  function handleOnFolderCreateClose() {
    setOpenCreateFolder(false);
    setRefreshId(`${Math.random()}`);
  }

  return (
    <Card className={styles.explorer}>
      <Title title="Explorer" />
      <Searchbar />
      <div className={styles.buttons}>
        <Button
          label="Create New File"
          icon={<Add />}
          onClick={handleCreateFileClick}
        />
        <Button
          label="Create New Folder"
          icon={<CreateNewFolder />}
          onClick={handleCreateFolderClick}
        />
        {openCreateFile && (
          <CreateNewFileDialogTemplate
            open={openCreateFile}
            onClose={handleOnFileCreateClose}
          />
        )}
        {openCreateFolder && (
          <CreateNewFolderDialogTemplate
            open={openCreateFolder}
            onClose={handleOnFolderCreateClose}
          />
        )}
      </div>
      <Breadcrumbs />
      <Directory />
      <LocationInfo />
    </Card>
  );
}
