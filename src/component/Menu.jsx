import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <ul><Link to="/breakfast">Breakfast</Link></ul>
      <ul><Link to="/lunch">Lunch</Link></ul>
      <ul><Link to="/sweet">Sweet</Link></ul>
    </div>
  );
}

export default Menu;
