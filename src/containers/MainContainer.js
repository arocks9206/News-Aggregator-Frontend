import React, {Fragment} from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import SideBar from '../SideBar.js';
import NewsContainer from './NewsContainer.js';
import Ad from '../Ad.js';
import Title from '../Title.js';

const MainContainer = () => {

  const items = [
    {name: 'home', label: 'Home'},
    {
      name: 'news',
      label: 'News',
      items: [
        {name: "top stories", label: "Top Stories"},
      ]
    },
    {
      name: 'publishers',
      label: 'Publishers',
      items: [
        {name: "bbc", label: "BBC"},
        {name: "independent", label: "Independent"},
        {name: "guardian", label: "Guardian"},
        {name: "mirror", label: "Mirror"}
      ]
    },
    {name: 'sources', label: 'Sources'}
  ]

    return (
      <Fragment>

        <div id="mainPage">
          <NewsContainer/>
          <Ad/>
          <Title/>
        </div>

        <div id="sidebar"> <SideBar items={items}/> </div>

        <NavBar/>


      </Fragment>
    )
}

export default MainContainer;
