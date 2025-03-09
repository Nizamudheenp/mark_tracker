import AdminPanel from "./components/AdminPanel";
import MarkSearch from "./components/MarkSearch"
import React, { useState } from "react";

function App() {

  const [view, setView] = useState('search');
  return (
    <>
     <div>
      <h1>Mark List Checking System</h1>
      {view === "search" && <MarkSearch setView={setView} />}
      {view === "admin" && <AdminPanel />}    </div>
      
    </>
  )
}

export default App
