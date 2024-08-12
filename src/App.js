import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TabBar from './components/TabBar';
import Home from './pages/Home';
import Players from './pages/Players';
import Club from './pages/Club';

function App() {
  return (
    <Router>
      <div>
        <TabBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/club" element={<Club />} />
          <Route
            path="*"
            element={<Navigate to="/home" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;