import React, { useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./barchart.css";
import axios from "axios";

function Barchart() {

    const [data,setdata] = useState([]);
    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
    setWidth(window.innerWidth);
    }
    
  useEffect(() => {
      getData();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  const getData= async () => {
    await axios({
      url: "/api/graph/details",
      method: "get",
    })
    .then((res)=>{
      setdata(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
    <div className="chart-container mt-5">
        <h3 className="tablehead">Timeseries Trend of Gigs completed</h3>
        <BarChart
          width={width*0.6}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expertservices" fill="#8884d8" />
          <Bar dataKey="workfullfillment" fill="#82ca9d" />
        </BarChart>
      </div>
    </>
  );
}

export default Barchart;
