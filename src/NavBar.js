import React from 'react';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <a href="/home">Home</a>
        </li>
        <li className="navLink">
          <a href="/about">About</a>
        </li>
        <li className="navLink">
          <a href="/news">News</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
