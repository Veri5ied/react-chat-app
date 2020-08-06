import React, { useState } from "react";

import ClientComponent from "./components/ClientComponent";
import AxiosComponent from "./components/axiosComponent";



function App() {
  const [loadClient, setLoadClient] = useState(true);
  return (
    <>
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        STOP CLIENT
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <ClientComponent />: null}

      <AxiosComponent />
      
    </>
  );
}

export default App;