import React from 'react';
import classes from './Asteroid.module.scss';

const Asteroid = (props) => {
  let asteroidClassName;
  if(props.isLegend) {
    props.isRightLegend ? asteroidClassName = [classes.Asteroid, classes['Asteroid__Right-legend']].join(' ') : (asteroidClassName = classes.Asteroid);
  } else {
    asteroidClassName = [classes.Asteroid, classes.isActive].join(' ')
  }

  const label = props.legendLabel ? <div className={classes.LegendLabel}>{props.legendLabel}</div>: null;
  return (
    <div 
      className={asteroidClassName}
      style={{
        top: props.top,
        left: props.left,
        height: [props.radius,'px'].join('').toString(),
        width: [props.radius,'px'].join('').toString(),
      }}>
        <div className={classes['Asteroid-center']}>
          {label}
        </div>
    </div>
  )
}

export default Asteroid;