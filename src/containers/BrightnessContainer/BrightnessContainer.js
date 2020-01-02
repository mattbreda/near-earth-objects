import React from 'react';

import LabelTitle from '../../components/ui/LabelTitle/LabelTitle';
import BrightnessLegend from '../../components/ui/BrightnessLegend/BrightnessLegend';
import AsteroidMagnitude from '../../components/ui/AsteroidMagnitude/AsteroidMagnitude';
import classes from './BrightnessContainer.module.scss';

const BrightnessContainer = (props) => {
    return (
      <div className={classes.BrightnessContainer}>
        <LabelTitle label={'Magnitude'} labelUnit={'H'}/>
        <BrightnessLegend />
        <div className={classes['BrightnessContainer--asteroids']}>
          <AsteroidMagnitude magnitude={100}/>
          <AsteroidMagnitude magnitude={75}/>
          <AsteroidMagnitude magnitude={50}/>
          <AsteroidMagnitude magnitude={25}/>
          <AsteroidMagnitude magnitude={0}/>
        </div>
      </div>
    );
}

export default BrightnessContainer;