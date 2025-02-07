import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/page/Dashboard";
import BasePage from "./components/page/BasePage";
import { linksNavbar } from "./units";

function App() {
  const [page, setPage] = useState(<Dashboard/>)
  return (
    <div className="app">
      <Navbar setPage={setPage} links={linksNavbar}/>
      <BasePage>
        {page}
      </BasePage>
    </div>
  );
}

export default App;
