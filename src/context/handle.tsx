import React, { createContext, Dispatch, SetStateAction } from "react";

type HandleUpdater = Dispatch<SetStateAction<FileSystemDirectoryHandle[]>>;

const HandleContext = createContext<FileSystemDirectoryHandle[]>([]);
const UpdateHandleContext = createContext<HandleUpdater>(
  (() => {}) as HandleUpdater
);

interface HandleContextProviderProps {
  children: React.ReactNode;
  handle: FileSystemDirectoryHandle[];
  setHandle: HandleUpdater;
}

export default function HandleContextProvider(
  props: HandleContextProviderProps
) {
  const { children, handle: handleValue, setHandle: updateHandleValue } = props;
  return (
    <HandleContext.Provider value={handleValue}>
      <UpdateHandleContext.Provider value={updateHandleValue}>
        {children}
      </UpdateHandleContext.Provider>
    </HandleContext.Provider>
  );
}
export { HandleContext, UpdateHandleContext };
