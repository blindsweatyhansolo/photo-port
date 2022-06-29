// This App.js file is the center of the application.
// Think of App.js as the root component, or the wrapper component that 
// houses all of the other components

// React MUST BE imported in every component file
import React, { useState } from 'react';
// import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

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

  // returns JSX (JS that can represent HTML)
  return (
    <div>
      <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main>
        {/* if contact NOT is selected in nav, render Gallery and About */}
        {!contactSelected ? (
          // <> </> - REACT FRAGMENTS allow grouping of multiple elements
          <>
          <Gallery currentCategory={currentCategory} />
          <About />
          </>
        ) : (
          // ELSE render ContactForm
          <ContactForm />
        )}

      </main>
    </div>
  );
}

export default App;