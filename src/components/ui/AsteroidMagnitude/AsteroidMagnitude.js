import React from 'react';

import classes from './AsteroidMagnitude.module.scss'
import {uniformName,calculateRelativeScale} from '../../../utils/functions';




const AsteroidMagnitude = props => {
  const magnitude = props.asteroidData.absolute_magnitude_h;
  const name = props.asteroidData.name;
  const diameter = (props.asteroidData.estimated_diameter.kilometers.estimated_diameter_max + props.asteroidData.estimated_diameter.kilometers.estimated_diameter_min)/2;
  return (
    <div className={classes.AsteroidMagnitude}>
      <span className={classes['AsteroidMagnitude__asteroid']}>
        <span 
          className={classes['AsteroidMagnitude__magnitude']}
          style={{
            height: [calculateRelativeScale(magnitude,0,100,props.minBr,props.maxBr),'%'].join('').toString(),
            width: [calculateRelativeScale(magnitude,0,100,props.minBr,props.maxBr),'%'].join('').toString()}}></span>
            <span className={classes['AsteroidMagnitude__center']}>
            </span>
      </span>
      <div className={classes['AsteroidMagnitude__info']}>
        <span className={classes['AsteroidMagnitude__data']}>Name: {uniformName(name)}</span>
          <span className={classes['AsteroidMagnitude__data']}>Diameter: {Math.round(diameter * 100) / 100} km</span>
          <span className={classes['AsteroidMagnitude__data']}>magnitude: {magnitude} h</span>
      </div>
    </div>
  )
}

export default AsteroidMagnitude;