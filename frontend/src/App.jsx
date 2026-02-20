import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard'
import Interview from './pages/Interview';
import InterviewResults from './pages/InterviewResults';
import History from './pages/History';
import About from './pages/About';
import Pricing from './pages/Pricing';
import ProtectedRoutes from './pages/Protectedroutes';

const App = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route element={<ProtectedRoutes />}>
                  <Route path="/home" element={<Dashboard />}></Route>
                  <Route path="/interview/:id" element={<Interview />}></Route>
                  <Route
                      path="/result/:id"
                      element={<InterviewResults />}
                  ></Route>
                  <Route path="/history" element={<History />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/price" element={<Pricing />}></Route>
              </Route>
          </Routes>
      </div>
  );
}

export default App
