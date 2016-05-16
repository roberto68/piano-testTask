import React from 'react';
import Inflected from 'inflected';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import style from './DateBox.css';
import todosGraph from './todosGraph';
import {MONTH_NUM_TO_STRING} from '../constants';

class DateBox extends React.Component {
  constructor (props, context) {
    super(props, context);
      //console.log(this.props)
  }
  render () {
    return (
        <div>
          <div>
            <Link to={`/todosGraph`}>graph area of todos</Link>
          </div>
          <div className={style.dateBoxContainer}>
            {MONTH_NUM_TO_STRING[this.props.month]} {Inflected.ordinalize(this.props.day)}, {this.props.year}
          </div>
        </div>

    );
  } //todosGraph to be implemented
}

function mapStateToProps (state) {
  return {
    month: state.calendar.month,
    day: state.calendar.selectedDayOfMonth,
    year: state.calendar.year
  };
}

export default connect(mapStateToProps)(DateBox);
