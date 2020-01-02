import React from 'react';
import classes from './singleDayButton.module.scss';

const SingleDayButton = (props) => {
  const select = props.select;
  const day = props.day;
  const buttonClass = props.isSelected ? [classes.DayButton, classes.DayButton__selected].join(' ') : classes.DayButton;
  return (
    <div 
      className={buttonClass}
      onClick={() => select(day)}
      >{props.dayLabel}</div>
  )
}

export default SingleDayButton;