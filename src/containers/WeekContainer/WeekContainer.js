import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import * as actionType from '../../store/actions';
import SingleDayButton from '../../components/ui/singleDayButton/singleDayButton';
import classes from './WeekContainer.module.scss';

class WeekContainer extends Component {
  state = {
    weekRange: 7,
    selectedDate: moment()
  }

  select(day) {
    this.props.onSelectDate(day.date.format('YYYY-MM-DD'));
    this.setState({
      selectedDate: day.date,
    });
  }


  render() {
    const today = moment();
    let week = [];

    for (let i = 0; i < this.state.weekRange; i++) {
      let date = today.clone().add(i, 'day')
      let day = {
        name: date.format("ddd").substring(0, 3),
        date: date
      };
      week.push(
        <SingleDayButton
          day={day}
          dayLabel={day.name}
          isSelected={date.isSame(this.state.selectedDate, 'day')}
          select={(day) => this.select(day)}
          key={day.date} />
      );
    }


    return (
      <div className={classes.WeekContainer}>
        <h3 className={classes['WeekContainer__Title']}>Select one day to update the chart:</h3>
        <div className={classes['WeekContainer__DayList']}>
          {week}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDate: state.date,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectDate: (selection) => dispatch({ type: actionType.SELECTED_DATE, date: selection }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekContainer);