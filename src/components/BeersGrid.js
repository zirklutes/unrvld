import React from 'react';

const BeersGrid = (props) => {
    console.log('props: ', props);
    const {beers} = props;

    if (!beers) { return <div>No data</div>}

    return (
      <div>
          <h2>Beers grid</h2>
          {beers.map((beer, index) => {
            return <div key={`bear_${index}`}>{beer.name}</div>;
        })}
      </div>
    );
  }
  
  export default React.memo(BeersGrid);