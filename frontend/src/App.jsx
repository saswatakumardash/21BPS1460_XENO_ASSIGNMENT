import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout.jsx";
import AudienceBuilder from "./pages/Audiences/AudienceBuilder.jsx";
import CampaignList from "./pages/Campaigns/CampaignList.jsx";
import AnalyticsDashboard from "./pages/Analytics/AnalyticsDashboard.jsx";
import SettingsPage from "./pages/Settings/Page.jsx";

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />
          <Route path="/audiences" element={<AudienceBuilder />} />
          <Route path="/campaigns" element={<CampaignList />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
