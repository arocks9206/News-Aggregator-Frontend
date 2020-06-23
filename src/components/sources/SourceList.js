import React from 'react';
import Source from './Source.js';

const SourceList = (props) => {
  if (props.sources.length === 0) {
    return "Loading..."
  }

  const allSources = props.sources.map((source, index) => {
    return (
      <li>
        <Source source={source} />
      </li>
    )
  })

  return (
    <ul>
      {allSources}
    </ul>
  )
}

export default SourceList;
