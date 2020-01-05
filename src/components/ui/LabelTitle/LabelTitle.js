import React from 'react';
import classes from './LabelTitle.module.scss';

const LabelTitle = (props) => {
  let unit = props.labelUnit ? <span className={classes['LabelTitle__unit']}>{props.labelUnit}</span> : null;
  return (
    <h2 className={classes.LabelTitle}>{props.label} {unit}</h2>
  );
}

export default LabelTitle;