import React from 'react'
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
      <div>
          <Navbar />

          <div>
              <img
                  src="/f.png"
                  alt="AI Illustration"
                  className="h-60 w-auto mx-auto object-contain "
              />
          </div>
      </div>
  );
}

export default Dashboard;
