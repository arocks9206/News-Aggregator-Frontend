import React, {Component, Fragment} from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PublisherList from '../components/publishers/PublisherList.js';
import SourceList from '../components/sources/SourceList.js';
import StoryList from '../components/stories/StoryList.js';
import Request from '../helpers/request.js'


class NewsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      stories: [],
      sources: [],
      publishers: [],
      selectedStory: null
    };
    this.handleStorySelected = this.handleStorySelected.bind(this);
  }

  handleStorySelected(story) {

    this.setState({selectedStory: story})
  }

  componentDidMount(){
    const request = new Request();
    const storyPromise = request.get('/api/stories')
    const sourcePromise = request.get('/api/sources')
    const publisherPromise = request.get('/api/publishers')

    Promise.all([storyPromise, sourcePromise, publisherPromise])
    .then((data) => {
      this.setState({
        stories: data[0],
        sources: data[1],
        publishers: data[2]
      })
    })

  }

  render(){

    const selectedStory = this.state.stories.find(story =>
      story.id === this.state.selectedStory
    )

    if (this.state.selectedStory === null) {
      return <StoryList handleStorySelected={this.handleStorySelected} stories={this.state.stories} onStorySelected={this.handleStorySelected}/>
    }

    if (this.state.selectedStory != null) {
      return <SourceList selectedStory={this.state.selectedStory}/>
    }

    
  }
}

export default NewsContainer;
