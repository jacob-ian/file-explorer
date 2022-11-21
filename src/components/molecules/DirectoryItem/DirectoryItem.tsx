import React from "react";
import styles from "./DirectoryItem.module.scss";

interface DirectoryItemProps {
  selected: boolean;
  name: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  icon: React.ReactNode;
}

export default function DirectoryItem(props: DirectoryItemProps) {
  const { name, selected, onClick, icon } = props;
  return (
    <div className={styles.item} onClick={onClick}>
      <div className={`${styles.icon} ${selected ? styles.selected : ""}`}>
        {icon}
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
