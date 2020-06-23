import React, {Fragment} from 'react';

const Story = ({story}) => {

  if (!story) {
    return "Loading..."
  }

  return(
    <Fragment>

      <h2>{story.title}</h2>

    </Fragment>
  )
}

export default Story;
