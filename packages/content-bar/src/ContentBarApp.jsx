import React, { useState } from "react";
import "./ContentBar.css";

const ContentBarApp = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", content: "Welcome to Dashboard" },
    { id: "analytics", label: "Analytics", content: "Analytics data here" },
    { id: "reports", label: "Reports", content: "Reports section" },
    { id: "settings", label: "Settings", content: "Settings panel" },
  ];

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="content-bar">
      <nav className="content-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="content-panel">
        <h2>{activeTabContent?.label}</h2>
        <div className="content-body">
          <p>{activeTabContent?.content}</p>
          <div className="content-stats">
            <div className="stat-item">
              <span className="stat-value">42</span>
              <span className="stat-label">Total Items</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBarApp;
