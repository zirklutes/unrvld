import React from 'react';
import '../styles/Grid.scss';

const BeersGrid = (props) => {
    const {beers} = props;

    if (!beers) { return <div>No data</div>;}

    return (
        <div>
            <h2>Beers Grid</h2>
            <div className="beers-grid">
                {beers.map(beer => {
                    return <div key={`grid-item${beer.id}`} className="beers-grid-item">{beer.name}</div>
                })}
            </div>
      </div>
    );
  }
  
  export default React.memo(BeersGrid);