import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EventsPage from "./pages/EventsPage";
import EventsPageNormalUser from "./pages/EventsPageNormalUser";
import FirstPage from './pages/FirstPage';
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/eventsNormalUser" element={<EventsPageNormalUser />} />
        </Routes>
      </Router>
  );
}

export default App;
