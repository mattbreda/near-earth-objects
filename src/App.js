import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';

import classes from './App.module.scss';
import WeekContainer from './containers/WeekContainer/WeekContainer';
import AsteroidLegend from './containers/AsteroidLegend/AsteroidLegend';
import ScatterContainer from './containers/ScatterContainer/ScatterContainer';
import BrightnessContainer from './containers/BrightnessContainer/BrightnessContainer';
import Loader from './components/ui/Loader/Loader';
import { nasaApiKey } from './utils/const';
import { sortByMagnitude } from './utils/functions';


class App extends Component {
  state = {
    isDataLoading: true,
    asteroidData: null,
    selectedDate: this.props.selectedDate,
    error: false
  }

  componentDidMount() {
    let startDate = moment().format('YYYY-MM-DD');
    let endDate = moment().add(6, 'days').format('YYYY-MM-DD');
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${nasaApiKey}`)
      .then(res => {
        const data = res.data.near_earth_objects;
        this.setState({
          asteroidData: data,
          isDataLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true })
      })
  }

  render() {
    const error = <div className={classes['App__loaderContainer']}><span className={classes['App__error']}>Sorry, something went wrong!<br /> Try to refresh the page, and if the problem persist, try again later.</span></div>;
    let main = <div className={classes['App__loaderContainer']}><Loader /></div>;
    let side = <div className={classes['App__loaderContainer']}><Loader /></div>;
    let week = <div></div>
    if (this.state.asteroidData && this.state.selectedDate) {
      main = <ScatterContainer dailyData={this.state.asteroidData[this.props.selectedDate]} />
      week = <WeekContainer />
    } else if (!this.state.asteroidData && this.state.error) {
      main = error;
    }
    if (this.state.asteroidData) {
      side = <BrightnessContainer fiveMostBright={sortByMagnitude(this.state.asteroidData, 5)} />
    }

    return (
      <div className={classes.App}>
        <div className={classes['App__main']}>
          <h1 className={classes['App__title']}>Asteroids of the day</h1>
          <div className={classes['App__heading']}>
            {week}
            <AsteroidLegend />
          </div>
          {main}
        </div>
        <div className={classes['App__side']}>
          <h1 className={classes['App__title']}>Brightest of the week</h1>
          {side}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDate: state.date,
  };
};


export default connect(mapStateToProps, null)(App);
