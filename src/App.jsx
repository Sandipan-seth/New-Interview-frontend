import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        
      </Routes>
    </div>
  );
}

export default App
