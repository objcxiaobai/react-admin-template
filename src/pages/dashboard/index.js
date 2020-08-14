import React from 'react';
import PanelGroup from '@/pages/dashboard/components/PanelGroup';
import LineChart from '@/pages/dashboard/components/LineChart';
import './index.css';
function Dashboard() {
  return (
    <div className="dashboard-container">
      <PanelGroup />
      <LineChart />
    </div>
  );
}

export default Dashboard;
