import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const battery = 80;
  const signal = 4;
  const isEmergency = false;
  const nearestFire = 15.3;
  const windSpeed = 12.5;
  const airQuality = 142;
  const compassMarks = ["N", "E", "S", "W"];
  const compassDegree = 90;

  const bgColor = isDarkMode ? "dark-bg" : "light-bg";
  const textColor = isDarkMode ? "dark-text" : "light-text";

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`container ${bgColor} ${textColor}`}>
      <div className="card">
        {/* Header */}
        <div className="header">
          <h1 className="app-title">Safeguardian</h1>
          <div className="header-info">
            <div className="battery">80%</div>
            <div className="signal">4G</div>
            <button className="emergency-btn">GET HELP</button>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <div className="dark-mode-toggle">
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <span className="slider round"></span>
          </label>
          <span className="toggle-label">Dark Mode</span>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {["chat", "map", "news", "profile"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "chat" && <Chat />}
          {activeTab === "map" && <Map />}
          {activeTab === "news" && <News />}
          {activeTab === "profile" && <Profile />}
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-info">
            <div className="fire-distance">Fire: {nearestFire}km</div>
            <div className="compass">
              {compassMarks.map((mark, index) => (
                <span
                  key={index}
                  className={compassDegree === index * 90 ? "highlight" : ""}
                >
                  {mark}
                </span>
              ))}
            </div>
            <div className="wind-speed">Wind: {windSpeed} km/h</div>
          </div>
          <div className="aqi">
            AQI: {airQuality} (
            {airQuality > 150
              ? "Unhealthy"
              : airQuality > 100
              ? "Unhealthy for Sensitive Groups"
              : "Moderate"}
            )
          </div>
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="chat">
      <div className="chat-window">
        <div className="chat-message sent">
          Welcome to Safeguardian. How can I assist you today?
        </div>
        <div className="chat-message received">
          What's the current environmental status in my area?
        </div>
        <div className="chat-message sent">
          Based on your location, the air quality is moderate with a rating of
          142.
        </div>
      </div>
      <div className="chat-input-section">
        <input className="chat-input" placeholder="Type your message..." />
        <button className="chat-send">Send</button>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="map">
      <h3>Real-time Environmental Map</h3>
      <iframe
        title="environmental-map"
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12093.33878859386!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1639239168937!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

function News() {
  return (
    <div className="news">
      <h3>Latest Environmental News</h3>
      <div className="news-item">
        <h4>Alert: Air Quality Warning</h4>
        <p>
          An air quality alert has been issued in your area due to increased
          pollution levels.
        </p>
      </div>
      <div className="news-item">
        <h4>Update: Water Conservation Measures</h4>
        <p>
          Local authorities have implemented new water conservation measures to
          deal with ongoing drought conditions.
        </p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <h3>User Profile</h3>
      <div className="profile-section">
        <h4>Personal Information</h4>
        <ul>
          <li>Name: John Doe</li>
          <li>Blood Type: A+</li>
          <li>Household Members: 4</li>
        </ul>
      </div>
      <div className="profile-section">
        <h4>Medical Concerns</h4>
        <ul>
          <li>Asthma (John)</li>
          <li>Diabetes (Household Member)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
