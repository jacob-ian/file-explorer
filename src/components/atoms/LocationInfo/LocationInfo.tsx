import React from "react";
import styles from "./LocationInfo.module.scss";
import useCurrentDirectory from "../../../hooks/useCurrentDirectory";

export default function LocationInfo() {
  const items = useCurrentDirectory();
  const files = items.filter((i) => i.kind === "file").length;
  const folders = items.filter((i) => i.kind === "directory").length;

  return (
    <div className={styles.info}>
      Total: {files} files and {folders} folders
    </div>
  );
}
