// This App.js file is the center of the application.
// Think of App.js as the root component, or the wrapper component that 
// houses all of the other components

// React MUST BE imported in every component file
import React from 'react';
// import './App.css';
import Nav from './components/Nav';
import About from './components/About';

// returns JSX (JS that can represent HTML)
function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;