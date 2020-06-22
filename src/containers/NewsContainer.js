import React, {Component} from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JournalistList from '../components/journalists/JournalistList.js';
import PublisherList from '../components/publishers/PublisherList.js';
import SourceList from '../components/sources/SourceList.js';
import StoryList from '../components/stories/StoryList.js';


class NewsContainer extends Component {

  render(){

    return (
      <div id="newsContainer">
        <div class="item item-1"> <JournalistList/> </div>
        <div class="item item-2"> <PublisherList/> </div>
        <div class="item item-3"> <SourceList/> </div>
        <div class="item item-4"> <StoryList/> </div>
        <div class="item item-5"> <StoryList/> </div>
        <div class="item item-6"> <StoryList/> </div>
      </div>
    );
  }
}
export default NewsContainer;
