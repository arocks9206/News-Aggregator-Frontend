import React from 'react';
import Story from './Story.js';

const StoryList = (props) => {
  if (props.stories.length === 0){
    return ("Loading...")
  }

  const allStories = props.stories.map((story, index) => {
    return (
      <li key={index}>
        <Story story = {story}/>
      </li>
    )
  })

  return (
    <ul>
      {allStories}
    </ul>
  )
}

export default StoryList;
