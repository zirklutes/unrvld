import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import { Loader, Accordion, BeersGrid } from './components';
import './App.scss';

function App() {

  const [beers, setBeers] = useState([]);
  const [isRequestFinished, setIsRequestFinished] = useState(false);


  const fetchFirstBeersPage = () => {
    //Fetch sublist of all beers just to minimize data we have to handle for this task.
      axios(
        'https://api.punkapi.com/v2/beers?page=1&per_page=8',
      ).then(response => {
        //If response is successfull we store response in local state
        //Also update isRequestFinished value
        setBeers(response.data);
        setIsRequestFinished(true);
      }).catch(
        //Update isRequestFinished value to know if loader should still be presented
        error => setIsRequestFinished(true)
      );
  }

    useEffect(() => {
      //On first component load fetch data
      fetchFirstBeersPage();
  }, []);

  const getContent = () => {
    if (!isRequestFinished) {
      return <Loader />;
    } else if (!beers) {
      return (
        <div>
          <h3>No data</h3>
        </div>
      ) 
    } else {
      return (
        <div>
          <div> 
            <h2>Acciordion</h2>
            {beers.map(beer => {
                return <Accordion key={`grid-item${beer.id}`} beer={beer} />
            })}
          </div>
          <BeersGrid beers={beers} />
        </div>
        );
      }
  }

  return (
    <div className="app">
      {getContent()}
    </div>
  );
}

export default App;
