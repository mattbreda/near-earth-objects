import React from 'react';
import classes from './AsteroidLegend.module.scss';
import Asteroid from '../../components/ui/Asteroid/Asteroid';


const AsteroidLegend = () => {
  return (
    <div className={classes.AsteroidLegend}>
      <h2 className={classes['AsteroidLegend-title']}>DIAMETER</h2>
      <div className={classes['AsteroidLegend-container']}>
        <Asteroid radius={15} left={'0'} top={'50'} isLegend={true} legendLabel={'Min km'}/>
        <Asteroid radius={100} left={'100'} top={'50'} isLegend={true} isRightLegend legendLabel={'Max km'}/>
      </div>
    </div>
  )
}

export default AsteroidLegend;