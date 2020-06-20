import React, {Component} from 'react';
import JournalistList from '../components/journalists/JournalistList.js';
import PublisherList from '../components/publishers/PublisherList.js';
import SourceList from '../components/sources/SourceList.js';
import StoryList from '../components/stories/StoryList.js';
import NavBar from '../NavBar.js';

class NewsContainer extends Component {

  render(){

    return (
      <div>
        <h2>News Container</h2>
        <JournalistList/>
        <PublisherList/>
        <SourceList/>
        <StoryList/>
      </div>
    );
  }
}
export default NewsContainer;
