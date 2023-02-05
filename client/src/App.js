import { useState, useEffect, createContext } from "react";
import Barchart from "./components/Barchart";
import Boxrow from "./components/Boxrow";
import Tablerow from "./components/TableRow";
import axios from "axios";
import DataContext from "./components/Datacontext";

function App() {

  const [data,setdata] = useState([]);

  const getData = async ()=>{
    await axios({
      url: "/api/detail",
      method: "get"
    })
    .then((res)=>{
      setdata(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  useEffect(()=>{
    getData();
  },[]);

  return (
    <DataContext.Provider value={data}>
      <div className="container">
        <Boxrow />
        <Barchart />
        <Tablerow />
      </div>
    </DataContext.Provider>
  );
}

export default App;
