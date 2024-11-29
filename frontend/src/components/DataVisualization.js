import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const DataVisualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await axios.get("https://azure-dream-catcher.azurewebsites.net/data/csv-data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      }
    };

    fetchCSVData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#F6F2E6] px-4">
      
      {/* Left Side - About the Visualization */}
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 py-10 flex">
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Sleep Data Visualization</h2>
          <div className="flex justify-center">
            <LineChart 
              width={600} 
              height={300} 
              data={data} 
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              animationDuration={1000}
              animationEasing="ease-out"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="Date" stroke="#4B5563" />
              <YAxis stroke="#4B5563" />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="Sleep Duration (hours)" 
                stroke="#6B7280" 
                strokeWidth={2} 
                dot={false}
                animationDuration={1000}
              />
              <Line 
                type="monotone" 
                dataKey="REM Sleep (%)" 
                stroke="#10B981" 
                strokeWidth={2} 
                dot={false}
                animationDuration={1000}
              />
            </LineChart>
          </div>
        </div>
      </div>

      {/* Right Side - Visualization Section */}
      <div className="w-full md:w-1/2 p-4 mb-8 md:mb-0">

        <h3 className="text-3xl text-center font-semibold text-black mb-4">About the Visualization</h3>

        <p className="text-gray-800">

          This visualization presents a comparison of sleep duration and REM sleep percentage over time. The two lines represent:

          <ul className="list-disc pl-5 mt-2">

            <li><strong>Sleep Duration (hours):</strong> The total amount of time spent sleeping each night.</li>

            <li><strong>REM Sleep (%):</strong> The percentage of time spent in REM sleep, which is crucial for restorative sleep.</li>

          </ul>

          By analyzing these trends, you can gain insights into your sleep patterns and potentially identify any issues or areas for improvement.

        </p>

      </div>
    </div>
  );
};

export default DataVisualization;