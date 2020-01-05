import React from 'react';

import LabelTitle from '../../components/ui/LabelTitle/LabelTitle';
import BrightnessLegend from '../../components/ui/BrightnessLegend/BrightnessLegend';
import AsteroidMagnitude from '../../components/ui/AsteroidMagnitude/AsteroidMagnitude';
import classes from './BrightnessContainer.module.scss';

const BrightnessContainer = (props) => {
  const asteroidToRender = props.fiveMostBright.map(asteroid => {
    return  <AsteroidMagnitude asteroidData={asteroid} key={asteroid.id}/>
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