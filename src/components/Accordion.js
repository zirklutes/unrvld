import React from 'react';

const Accordion = (props) => {
    const {beers} = props;

    if (!beers) {return <div>No data</div>}

    return (
      <div>
          <h2>Accordion</h2>
        {beers.map((beer, index) => {
            return <div key={`bear_${index}`}>{beer.name}</div>;
        })}
      </div>
    );
  }
  
  export default React.memo(Accordion);