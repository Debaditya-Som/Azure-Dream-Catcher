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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Sleep Data Visualization</h2>
        
        <LineChart width={600} height={300} data={data} className="mx-auto">
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="Date" stroke="#4B5563" />
          <YAxis stroke="#4B5563" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Sleep Duration (hours)" stroke="#6B7280" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="REM Sleep (%)" stroke="#10B981" strokeWidth={2} dot={false} />
        </LineChart>
      </div>
    </div>
  );
};

export default DataVisualization;
