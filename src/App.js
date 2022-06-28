// This App.js file is the center of the application.
// Think of App.js as the root component, or the wrapper component that 
// houses all of the other components

// React MUST BE imported in every component file
import React, { useState } from 'react';
// import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

// returns JSX (JS that can represent HTML)
function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    {
      name: 'portraits',
      description: 'Portraits of people in my life'
    },
    {
      name: 'food',
      description: 'Delicious delicacies'
    },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div>
      <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      />
      <main>
        <Gallery />
        <About />
      </main>
    </div>
  );
}

export default App;