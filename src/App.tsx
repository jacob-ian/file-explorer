import React, { useId, useState } from "react";
import "./App.css";
import DirectorySelectorDialog from "./components/templates/DirectorySelectorDialog";
import ExplorerTemplate from "./components/templates/ExplorerTemplate";
import { FilterContext } from "./context/filter";
import HandleContextProvider from "./context/handle";
import { RefreshContext } from "./context/refresh";

function App() {
  // A limitation of the Native File API solution is that we can't store the
  // directory in local storage (here is the expected code):
  // const [handle, setHandle] = usePersistedState<FileSystemDirectoryHandle[]>(
  //   "tree",
  //   []
  // );
  const [handle, setHandle] = useState<FileSystemDirectoryHandle[]>([]);
  const refresh = useState<string>(useId());
  const filter = useState<string>("");

  return (
    <div className="App">
      <HandleContextProvider handle={handle} setHandle={setHandle}>
        <RefreshContext.Provider value={refresh}>
          {handle.length === 0 ? (
            <DirectorySelectorDialog />
          ) : (
            <FilterContext.Provider value={filter}>
              <ExplorerTemplate />
            </FilterContext.Provider>
          )}
        </RefreshContext.Provider>
      </HandleContextProvider>
    </div>
  );
}

export default App;
