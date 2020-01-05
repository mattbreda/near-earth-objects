import React, { Component } from 'react';

import classes from './ScatterContainer.module.scss';
import Asteroid from '../../components/ui/Asteroid/Asteroid';
import { ReactComponent as ArrowUp } from '../../assets/up-arrow.svg';
import { ReactComponent as ArrowRigth } from '../../assets/right-arrow.svg';

const calculateRelativeScale = (unscaledNum, minAllowed, maxAllowed, min, max) => ((maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed)

class ScatterContainer extends Component {
  render () {
    const data = this.props.dailyData;
    let maxDimension = (data[0].estimated_diameter.kilometers.estimated_diameter_min + data[0].estimated_diameter.kilometers.estimated_diameter_max)/2;
    let minDimension = (data[0].estimated_diameter.kilometers.estimated_diameter_min + data[0].estimated_diameter.kilometers.estimated_diameter_max)/2;
    let minSpeed = Number(data[0].close_approach_data[0].relative_velocity.kilometers_per_second); 
    let maxSpeed = Number(data[0].close_approach_data[0].relative_velocity.kilometers_per_second);
    let minDistance = Number(data[0].close_approach_data[0].miss_distance.astronomical);
    let maxDistance = Number(data[0].close_approach_data[0].miss_distance.astronomical);
    let scaleMin = 15;
    let scaleMax= 100;

    data.forEach( singleAsteroidData => {
      let averageDiameter = (singleAsteroidData.estimated_diameter.kilometers.estimated_diameter_min + singleAsteroidData.estimated_diameter.kilometers.estimated_diameter_max)/2;
      if (maxDimension < averageDiameter) { maxDimension = averageDiameter }
      if (minDimension > averageDiameter) { minDimension = averageDiameter }
      if (maxSpeed < singleAsteroidData.close_approach_data[0].relative_velocity.kilometers_per_second) { maxSpeed = Number(singleAsteroidData.close_approach_data[0].relative_velocity.kilometers_per_second)}
      if (minSpeed > singleAsteroidData.close_approach_data[0].relative_velocity.kilometers_per_second) { minSpeed = Number(singleAsteroidData.close_approach_data[0].relative_velocity.kilometers_per_second)}
      if ( maxDistance < singleAsteroidData.close_approach_data[0].miss_distance.astronomical) { maxDistance = Number(singleAsteroidData.close_approach_data[0].miss_distance.astronomical)}
      if ( minDistance > singleAsteroidData.close_approach_data[0].miss_distance.astronomical) { minDistance = Number(singleAsteroidData.close_approach_data[0].miss_distance.astronomical)}
    }) 
    const asteroidsToRender = data
      .map( singleAsteroid => {
        let averageDiameter = (singleAsteroid.estimated_diameter.kilometers.estimated_diameter_min + singleAsteroid.estimated_diameter.kilometers.estimated_diameter_max)/2;
        let asteroidRaiud = calculateRelativeScale(averageDiameter,scaleMin,scaleMax,minDimension,maxDimension)
        let asteroidSpeed = calculateRelativeScale(singleAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second, 0, 100,minSpeed,maxSpeed)
        let asteroidDistance = calculateRelativeScale(singleAsteroid.close_approach_data[0].miss_distance.astronomical,0,100,minDistance,maxDistance)
        return (
          <Asteroid 
            isLegend={false} 
            key={singleAsteroid.id} 
            radius={asteroidRaiud} 
            left={asteroidSpeed} 
            top={asteroidDistance}
            asteroidData={singleAsteroid}
            asteroidDiameter={averageDiameter}
            asteroidSpeed={asteroidSpeed}
            asteroidDistance={asteroidDistance}/>
        )
      })

    return (
      <div className={classes.ScatterContainer}>
        <hr className={classes.BreakingLine}/>
        <hr className={classes.BreakingLine}/>
        <hr className={classes.BreakingLine}/>
        <span className={[classes.Label, classes['Label--YAxis']].join(' ')}><span className={classes.IconContainer}><ArrowUp /></span> Distance{' '}<span className={classes['Label__unit']}>(au)</span></span>
        <span className={[classes.Label, classes['Label--XAxis']].join(' ')}><span className={classes.IconContainer}><ArrowRigth /></span>Velocity{' '}<span className={classes['Label__unit']}>(km/s)</span></span>
        <div className={classes['ScatterContainer__AsteroidContainer']}>
         {asteroidsToRender}
          </div>
      </div>
    );
  }
}

export default ScatterContainer;