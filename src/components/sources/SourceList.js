import React from 'react';
import Source from './Source.js';

const SourceList = (props) => {

    const allSources = props.selectedStory.sources.map((source, index) => {
      return (
        <li key= {index} className="source-item">
          <div className="source">
            <Source source = {source}/>
          </div>
        </li>
      )
    })

    return (
      <ul className="source-list">
        {allSources}
      </ul>
    )


}

export default SourceList;
