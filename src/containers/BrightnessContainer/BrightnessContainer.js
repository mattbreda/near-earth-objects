import React from 'react';

import LabelTitle from '../../components/ui/LabelTitle/LabelTitle';
import BrightnessLegend from '../../components/ui/BrightnessLegend/BrightnessLegend';
import AsteroidMagnitude from '../../components/ui/AsteroidMagnitude/AsteroidMagnitude';
import classes from './BrightnessContainer.module.scss';

const BrightnessContainer = (props) => {
  let maxBright = props.fiveMostBright[props.fiveMostBright.length - 1].absolute_magnitude_h;
  let minBrigth = props.fiveMostBright[0].absolute_magnitude_h;
  const asteroidToRender = props.fiveMostBright.reverse().map(asteroid => {
    return <AsteroidMagnitude asteroidData={asteroid} key={asteroid.id} minBr={minBrigth} maxBr={maxBright} />
  });
  return (
    <div className={classes.BrightnessContainer}>
      <LabelTitle label={'Magnitude'} labelUnit={'H'} />
      <BrightnessLegend />
      <div className={classes['BrightnessContainer__asteroids']}>
        {asteroidToRender}
      </div>
    </div>
  );
}

export default BrightnessContainer;