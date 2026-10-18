import React from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import SectionPage from "./components/SectionPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./style.css";

const NotFound = () => {
  return (
    <main className="section-page">
      <h1>Page not found</h1>
      <p>The page you requested doesn't exist.</p>
      <Link to="/">Return to dashboard</Link>
    </main>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leads" element={<SectionPage title="Leads" />} />
          <Route
            path="/quotations"
            element={<SectionPage title="Quotations" />}
          />
          <Route
            path="/deals"
            element={<SectionPage title="Deals & Revenue" />}
          />
          <Route
            path="/orders"
            element={<SectionPage title="Orders & Payments" />}
          />
          <Route path="/team" element={<SectionPage title="Team activity" />} />
          <Route path="/reports" element={<SectionPage title="Reports" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </ErrorBoundary>
  );
};

export default App;
