import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Consultation from './components/Consultation';
import HomeService from './components/HomeService';
import PetCircle from './components/PetCircle';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Consultation />} />
            <Route path="/consult" element={<Consultation />} />
            <Route path="/service" element={<HomeService />} />
            <Route path="/circle" element={<PetCircle />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;