import React, { Component } from 'react';

import classes from './App.module.scss';
import WeekContainer from './containers/WeekContainer/WeekContainer';
import AsteroidLegend from './containers/AsteroidLegend/AsteroidLegend';
import ScatterContainer from './containers/ScatterContainer/ScatterContainer';
import BrightnessContainer from './containers/BrightnessContainer/BrightnessContainer';
import Loader from './components/ui/Loader/Loader';


class App extends Component {
  state = {
    isDataLoading: true,
  }

  render() {
    let main = this.state.isDataLoading ? <div className={classes['App--loaderContainer']}><Loader /></div>: <ScatterContainer />
    let side = this.state.isDataLoading ? <div className={classes['App--loaderContainer']}><Loader /></div>: <BrightnessContainer />
    return (
      <div className={classes.App}>
        <div className={classes['App-main']}>
          <h1 className={classes['App-title']}>Asteroids of the day</h1>
          <div className={classes['App-heading']}>
            <WeekContainer />
            <AsteroidLegend />
          </div>
          {main}
        </div>
        <div className={classes['App-side']}>
          <h1 className={classes['App-title']}>Brightest of the week</h1>
          {side}
        </div>
      </div>
    );
  }
}

export default App;
