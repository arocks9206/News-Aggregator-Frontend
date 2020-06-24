import React, {Fragment} from 'react';

const Story = ({story, handleStorySelected}) => {

  if (!story) {
    return "Loading..."
  }

  return(
    <Fragment>

      <button onClick={()=>handleStorySelected(story)}>{story.title}</button>

    </Fragment>
  )
}

export default Story;
