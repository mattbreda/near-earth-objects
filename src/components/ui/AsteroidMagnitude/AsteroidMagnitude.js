import React from 'react';

import classes from './AsteroidMagnitude.module.scss'
import {uniformName} from '../../../utils/functions';


const AsteroidMagnitude = props => {
  const magnitude = props.asteroidData.absolute_magnitude_h;
  const name = props.asteroidData.name;
  const diameter = (props.asteroidData.estimated_diameter.kilometers.estimated_diameter_max + props.asteroidData.estimated_diameter.kilometers.estimated_diameter_min)/2;
  return (
    <div className={classes.AsteroidMagnitude}>
      <span className={classes['AsteroidMagnitude--asteroid']}>
        <span 
          className={classes['AsteroidMagnitude--magnitude']}
          style={{
            height: [magnitude,'%'].join('').toString(),
            width: [magnitude,'%'].join('').toString()}}></span>
            <span className={classes['AsteroidMagnitude--center']}>
            </span>
      </span>
      <div className={classes['AsteroidMagnitude--info']}>
        <span className={classes['AsteroidMagnitude--data']}>Name: {uniformName(name)}</span>
          <span className={classes['AsteroidMagnitude--data']}>Diameter: {Math.round(diameter * 100) / 100} km</span>
          <span className={classes['AsteroidMagnitude--data']}>magnitude: {magnitude} h</span>
      </div>
    </div>
  )
}

export default AsteroidMagnitude;