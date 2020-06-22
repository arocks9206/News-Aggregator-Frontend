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
      name: 'stories',
      label: 'Stories',
      items: [
        {name: "top stories", label: "Top Stories"},
        {name: "entertainment", label: "Entertainment"},
        {name: "sport", label: "Sport"}
      ]
    },
    {
      name: 'sources',
      label: 'Sources',
      items: [
        {name: "bbc", label: "BBC"},
        {name: "the independent", label: "The Independent"},
        {name: "the guardian", label: "The Guardian"}
      ]
    },
  ]

    return (
      <Fragment>
      <div id="mainPage">
        <NavBar/>
        <NewsContainer/>
      </div>

      <div id="sidebar"> <SideBar items={items}/> </div>

        <Ad/>
        <Title/>
      </Fragment>
    )
}

export default MainContainer;
