import React from 'react';
import Story from './Story.js';

const StoryList = (props) => {
  if (props.stories.length === 0){
    return ("Loading...")
  }

  const allStories = props.stories.map((story, index) => {
    return (
      <li key={index}>
        <Story handleStorySelected={props.handleStorySelected} story = {story}/>
      </li>
    )
  })

  return (
    <div id="storylist">
      <ul>
        {allStories}
      </ul>
    </div>
  )
}

export default StoryList;
