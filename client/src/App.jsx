import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Dashboard from './pages/dashboard';
import Interview from './pages/Interview';

const App = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/home" element={<Dashboard />}></Route>
              <Route path="/interview/:id" element={<Interview />}></Route>
          </Routes>
      </div>
  );
}

export default App
