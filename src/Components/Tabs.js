import React, { useState } from "react";
import PredictTab from "./PredictTab";
import ConfigureTab from "./ConfigureTab";
import './Tabs.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("predict");
  const handlePredictTab = () => {
    setActiveTab("predict");
  };
  const handleConfigureTab = () => {
    setActiveTab("config");
  };
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={"fa fa-bar-chart padding-5-left " + (activeTab === "predict" ? "active" : "")} onClick={handlePredictTab}>Prediction</li>
        <li className={"fa fa-cog  padding-5-left " + (activeTab === "config" ? "active" : "")} onClick={handleConfigureTab}>Configuration</li>
      </ul>
      <div className="outlet">
        {activeTab === "predict" ? <PredictTab /> : <ConfigureTab />}
      </div>
    </div>
  );
};
export default Tabs;