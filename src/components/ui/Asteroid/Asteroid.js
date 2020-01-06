import React from 'react';
import classes from './Asteroid.module.scss';

import { uniformName } from '../../../utils/functions';

const Asteroid = (props) => {
  let asteroidClassName;
  if (props.isLegend) {
    props.isRightLegend ? asteroidClassName = [classes.Asteroid, classes['Asteroid--Right-legend']].join(' ') : (asteroidClassName = classes.Asteroid);
  } else {
    asteroidClassName = [classes.Asteroid, classes.isActive].join(' ')
  }
  const infoStyle = props.top > 80 ? { bottom: 0, transform: 'translate(2px, -100%)' } : { top: 0 }
  const label = props.legendLabel ? <div className={classes.LegendLabel}>{props.legendLabel}</div> : null;
  const infos = props.legendLabel ? null : (
    <div className={classes['Asteroid__info']}
      style={infoStyle}>
      <span className={classes['Asteroid__single-info']}> Name: {uniformName(props.asteroidData.name)} </span>
      <span className={classes['Asteroid__single-info']}> Diameter: {Math.round(props.asteroidDiameter * 100) / 100} km</span>
      <span className={classes['Asteroid__single-info']}> Magnitude: {props.asteroidData.absolute_magnitude_h} h</span>
      <span className={classes['Asteroid__single-info']}> Distance: {Math.round(props.asteroidDistance * 100) / 100} au</span>
      <span className={classes['Asteroid__single-info']}> Velocity: {Math.round(props.asteroidSpeed * 100) / 100} km/s</span>
    </div>
  )
  return (
    <div
      className={asteroidClassName}
      style={{
        top: [props.top, '%'].join('').toString(),
        left: [props.left, '%'].join('').toString(),
        height: [props.radius, 'px'].join('').toString(),
        width: [props.radius, 'px'].join('').toString(),
      }}>
      <div className={classes['Asteroid__center']}>
        {label}{infos}
      </div>
    </div>
  )
}

export default Asteroid;