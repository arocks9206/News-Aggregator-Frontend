import React, {Fragment} from 'react';

const Source = ({source}) => {

  if (!source) {
    return "Loading..."
  }

  return(
    <Fragment>

      <img src={source.sourceImg} />
      <h3>{source.sourceTitle}</h3>
      <p>{source.publisher.name}</p>
      <p>{source.rating}</p>
      <button>Upvote</button>
      <button>Downvote</button>

    </Fragment>
  )
}

export default Source;
