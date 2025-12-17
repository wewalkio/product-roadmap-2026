import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Overview } from './pages/Overview';
import { Delivery2026 } from './pages/Delivery2026';
import { Exploration } from './pages/Exploration';
import { CapacityJira } from './pages/CapacityJira';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/roadmap" replace />} />
        <Route path="/roadmap" element={<Overview />} />
        <Route path="/roadmap/2026" element={<Delivery2026 />} />
        <Route path="/roadmap/exploration" element={<Exploration />} />
        <Route path="/roadmap/capacity-jira" element={<CapacityJira />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
