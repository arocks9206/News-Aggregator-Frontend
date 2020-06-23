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
    this.handleStorySelected = this.handleStorySelected(bind);
  }

  handleStorySelected(id) {
    this.setState({selectedStory: id})
  }

  render() {
    const selectedStory = this.state.stories.find(story => {
      story.id === this.state.selectedStory;
    })
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

    return (
        <Fragment>
          <div id="newsContainer">
            <div className="item item-2"> <PublisherList/> </div>
            <div className="item item-4"> <StoryList stories={this.state.stories} onStorySelected={this.handleStorySelected}/> </div>
          </div>
        </Fragment>
    );
  }
}

export default NewsContainer;
