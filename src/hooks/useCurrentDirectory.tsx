import React, { useEffect, useState } from "react";
import useHandle from "./useHandle";
import useRefresh from "./useRefresh";

export default function useCurrentDirectory() {
  const tree = useHandle();
  const [refreshId] = useRefresh();
  const [entries, setEntries] = useState<FileSystemHandle[]>([]);

  const handle = tree[tree.length - 1];

  useEffect(() => {
    async function getEntries() {
      let entries: FileSystemHandle[] = [];
      for await (const [_, fileHandle] of handle) {
        entries.push(fileHandle);
      }
      return entries;
    }

    getEntries().then((entries) => {
      entries.sort((a, b) => a.name.localeCompare(b.name));
      setEntries(entries);
    });
  }, [handle, refreshId]);

  return entries;
}
