import React from 'react';

import classes from './AsteroidMagnitude.module.scss'

const AsteroidMagnitude = props => {
  return (
    <div className={classes.AsteroidMagnitude}>
      <span className={classes['AsteroidMagnitude--asteroid']}>
        <span 
          className={classes['AsteroidMagnitude--magnitude']}
          style={{
            height: [props.magnitude,'%'].join('').toString(),
            width: [props.magnitude,'%'].join('').toString()}}></span>
            <span className={classes['AsteroidMagnitude--center']}>
            </span>
      </span>
      <div className={classes['AsteroidMagnitude--info']}>
        <span className={classes['AsteroidMagnitude--data']}>Name: name</span>
        <span className={classes['AsteroidMagnitude--data']}>Name: name</span>
        <span className={classes['AsteroidMagnitude--data']}>Name: name</span>
      </div>
    </div>
  )
}

export default AsteroidMagnitude;