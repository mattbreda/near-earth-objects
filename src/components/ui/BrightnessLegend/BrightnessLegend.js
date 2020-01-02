import React from 'react';

import classes from './BrightnessLegend.module.scss'

const BrightnessLegend = (props) => {
  return (
    <div className={classes.BrightnessLegend}>
      <div className={classes['BrightnessLegend-element']}>
        <span className={[classes['BrightnessLegend-square'],classes['BrightnessLegend-square__full']].join(' ')}>
        </span>
        <span className={classes['BrightnessLegend-description']}>
          Filled area: magnitude
        </span>
      </div>
      <div className={classes['BrightnessLegend-element']}>
      <span className={classes['BrightnessLegend-square']}>
        </span>
        <span className={classes['BrightnessLegend-description']}>
          Empty area: brightness
        </span>
      </div>
    </div>
  );
}

export default BrightnessLegend;