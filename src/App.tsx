import React from 'react';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <About title="Ethan" description="Backend Developer/System Administrator" />
    </div>
  );
}

export default App;
