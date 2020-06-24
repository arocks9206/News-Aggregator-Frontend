import React from 'react';
import Source from './Source.js';

const SourceList = (props) => {

    const allSources = props.selectedStory.sources.map((source, index) => {
      return (
        <li key= {index}>
          <Source source = {source}/>
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
