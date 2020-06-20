import React from 'react';



const NavBar = (props) => {
  return (
    <header>
    <img src="/images/logo.png" alt="Logo"/>

      <ul>
      <li className="navLink">
        <a href="/home">Home</a>
      </li>
        <li className="navLink">
          <a href="/stories">News Articles</a>
        </li>
        <li className="navLink">
          <a href="/about">About Us</a>
        </li>
      </ul>

      <div className="searchbar">
        <input type="text" className="input" placeholder="Search..." />
      </div>
    </header>
  )
}

export default NavBar;
