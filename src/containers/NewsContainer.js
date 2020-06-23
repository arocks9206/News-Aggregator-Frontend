import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
      publishers: []
    }
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
      <Router>
        <Fragment>
        <div id="newsContainer">
          <div className="item item-1"> <PublisherList/> </div>
          <div className="item item-2"> <SourceList/> </div>
          <div className="item item-3"> <StoryList/> </div>
          <div className="item item-4"> <StoryList/> </div>
          <div className="item item-5"> <StoryList/> </div>
        </div>
          <Switch>
          <Route render={(props) => {
           return <StoryList stories={this.state.stories}/>
       }} />
       <Route render={(props) => {
           return <SourceList sources={this.state.sources}/>
       }} />
       <Route render={(props) => {
           return <PublisherList publishers={this.state.publishers}/>
       }} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
export default NewsContainer;
