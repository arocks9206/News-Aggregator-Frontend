import React from 'react';
import Source from './Source.js';

const SourceList = (props) => {

    const allSources = props.selectedStory.sources.map((source, index) => {
      return (
        <li key= {index} className="component-item">
          <div className="component">
            <Source source = {source}/>
          </div>
        </li>
      )
    })

    return (
      <ul className="component-list">
        {allSources}
      </ul>
    )


}

export default SourceList;
