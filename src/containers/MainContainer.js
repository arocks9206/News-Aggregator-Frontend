import React, {Fragment} from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import SideBar from '../SideBar.js';
import NewsContainer from './NewsContainer.js';

const MainContainer = () => {

  const items = [
    {name: 'home', label: 'Home'},
    {
      name: 'stories',
      label: 'Stories',
      items: [
        {name: "top stories", label: "Top Stories"},
        {name: "entertainment", label: "Entertainment"},
        {name: "sport", label: "Sport"},
        {name: "uk news", label: "Uk News"},
        {name: "world news", label:"World News"},
        {name: "best rated", label:"Best Rated"}
      ]
    },
    {
      name: 'sources',
      label: 'Sources',
      items: [
        {name: "bbc", label: "BBC"},
        {name: "the independent", label: "The Independent"},
        {name: "the guardian", label: "The Guardian"},
        {name: "daily mail", label: "Daily Mail"}
      ]
    },
    {
      name: 'other',
      label: 'Other',
      items: [
        {name: "site map", label: "Site Map"},
        {name: "about", label: "About"},
        {name: "Sample", label: "Sample"}
      ]
    }
  ]

    return (
      <Fragment>
      <div id="mainPage">
        <NavBar/>
        <NewsContainer/>
        <div id="sidebarWrapper">
        <div id="adSpace">
        </div>
        <SideBar items={items}/>
        </div>
        </div>
      </Fragment>
    )
}

export default MainContainer;
