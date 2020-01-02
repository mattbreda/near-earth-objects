import React from 'react';

import classes from './App.module.scss';
import WeekContainer from './containers/WeekContainer/WeekContainer';
import AsteroidLegend from './containers/AsteroidLegend/AsteroidLegend';
import ScatterContainer from './containers/ScatterContainer/ScatterContainer';


function App() {
  return (
    <div className={classes.App}>
      <div className={classes['App-main']}>
        <h1 className={classes['App-title']}>Asteroids of the day</h1>
        <div className={classes['App-heading']}>
          <WeekContainer />
          <AsteroidLegend />
        </div>
        <ScatterContainer />
      </div>
      <div className={classes['App-side']}>
        <h1 className={classes['App-title']}>Brightest of the week</h1>
      </div>
    </div>
  );
}

export default App;
