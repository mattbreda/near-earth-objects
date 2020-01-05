import * as actionType from './actions';
import moment from 'moment';

const initialState = {
  date: moment().format('YYYY-MM-DD'),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SELECTED_DATE:
      // console.log(action.date)
      return {
        ...state,
        date: action.date
      }
    default:
      return state
  }
};

export default reducer;