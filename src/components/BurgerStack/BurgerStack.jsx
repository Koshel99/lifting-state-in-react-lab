// src/components/BurgerStack/BurgerStack.jsx
import React from 'react';

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        props.stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.removeFromBurger(ingredient)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;

