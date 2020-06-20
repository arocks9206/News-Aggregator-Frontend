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
        {name: "sport", label: "Sport"}
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
  ]

    return (
      <Fragment>
        <NavBar/>
        <NewsContainer/>
        <SideBar items={items}/>
      </Fragment>
    )
}

export default MainContainer;
