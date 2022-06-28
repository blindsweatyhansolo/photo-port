import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [], 
    setCurrentCategory, 
    currentCategory,
  } = props;

  // useEffect takes two arguments: callback function and array with single element (currentCategory)
  // if currentCategory changes, the component re-renders since the second arg directs the hook on
  // changes to the value of this state
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role='img' aria-label='camera'>
            {" "}
            📸
          </span>
          {" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${
              // if true, navActive will be returned (short circuit expression)
              currentCategory.name === category.name && 'navActive'}`} 
              key={category.name} >
              <span onClick={() => {
                setCurrentCategory(category);
              }} >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;