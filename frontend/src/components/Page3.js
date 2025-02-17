import React, { useEffect, useState } from 'react';
import { Pie, Line } from 'react-chartjs-2'; // Import chart components
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';

// Register chart components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const Page3 = () => {
  const [fileData, setFileData] = useState([
    { type: 'Images', count: 20 },
    { type: 'Videos', count: 15 },
    { type: 'Documents', count: 25 },
    { type: 'Others', count: 10 },
  ]);

  const [uploadsOverTime, setUploadsOverTime] = useState([
    { month: 'January', uploads: 10 },
    { month: 'February', uploads: 15 },
    { month: 'March', uploads: 20 },
    { month: 'April', uploads: 30 },
  ]);

  // Pie Chart Data
  const pieChartData = {
    labels: fileData.map((data) => data.type),
    datasets: [
      {
        label: 'File Types',
        data: fileData.map((data) => data.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Line Chart Data
  const lineChartData = {
    labels: uploadsOverTime.map((data) => data.month),
    datasets: [
      {
        label: 'Uploads Over Time',
        data: uploadsOverTime.map((data) => data.uploads),
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: '#f0f8ff',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '10px', background: 'blue', color: 'white' }}>
        <h1>Analysis</h1>
      </header>

      {/* Body */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        {/* Circle Graph */}
        <div style={{ flex: 1, margin: '0 10px', textAlign: 'center' }}>
          <h2>File Type Distribution</h2>
          <Pie data={pieChartData} />
        </div>

        {/* Line Graph */}
        <div style={{ flex: 1, margin: '0 10px', textAlign: 'center' }}>
          <h2>Uploads Over Time</h2>
          <Line data={lineChartData} />
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '10px',
          background: 'blue',
          color: 'white',
          position: 'fixed',
          width: '100%',
          bottom: 0,
        }}
      >
        <h3>Happy Journey</h3>
      </footer>
    </div>
  );
};

export default Page3;
