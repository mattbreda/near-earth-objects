import React from 'react';

import classes from './BrightnessLegend.module.scss'

const BrightnessLegend = (props) => {
  return (
    <div className={classes.BrightnessLegend}>
      <div className={classes['BrightnessLegend__element']}>
        <span className={[classes['BrightnessLegend__square'], classes['BrightnessLegend__square--full']].join(' ')}>
        </span>
        <span className={classes['BrightnessLegend__description']}>
          Filled area: magnitude
        </span>
      </div>
      <div className={classes['BrightnessLegend__element']}>
        <span className={classes['BrightnessLegend__square']}>
        </span>
        <span className={classes['BrightnessLegend__description']}>
          Empty area: brightness
        </span>
      </div>
    </div>
  );
}

export default BrightnessLegend;