import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const DataVisualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/data/csv-data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      }
    };

    fetchCSVData();
  }, []);

  return (
    <div>
      <h2>Sleep Data Visualization</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sleep Duration (hours)" stroke="#8884d8" />
        <Line type="monotone" dataKey="REM Sleep (%)" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default DataVisualization;
