import React from 'react';
import { Button } from '@material-ui/core';
import moment from 'moment';
import './Calendar.css';
import fireStore from '../../fireStore/fireStore';
import { connect } from 'react-redux';
import { getDefaultNormalizer } from '@testing-library/react';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: moment()
        }
    }

    generate = () => {
        const workingDates = this.getWorkingData(this.state.current);
        const today = this.state.current;
        const startWeek = today.clone().startOf('month').week();
        const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
        let calendar = [];
        for (let week = startWeek; week <= endWeek; week++) {
          calendar.push(
            <div className="calendar_body" key={week}>
              {
                Array(7).fill(0).map((n, i) => {
                  let current = today.clone().week(week).startOf('week').add(n + i, 'day')
                  let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                  let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
                  let isWorked = workingDates.includes(current.format('YYMMDD')) ? "work" : "not_work";
                  return (
                    <div className={`box ${isSelected} ${isGrayed} 
                        ${i === 0 ? "sun" : ""} 
                        ${i === 6 ? "sat" : ""} 
                        ${isWorked}`} 
                        key={i}>
                      <span className={`text`}>{current.format('D')}</span>
                    </div>
                  )
                })
              }
            </div>
          )
        }
        return calendar;
    }

    getWorkingData = (current) => {
        current.startOf('month');
        current.endOf('month');
        var userData = fireStore.collection('users').doc(this.props.user.userName);
        userData.collection('work')
        .where('start', '>=', current.startOf('month').toDate())
        .where('start', '<=', current.endOf('month').toDate())
        .get().then(docs => {
            docs.forEach(doc => {console.log(moment().milliseconds(doc.data().start))});
        })
        return ['200411','200412',5,7];
    }

    beforeMonth = () => {
        this.setState({
            current: this.state.current.subtract(1, 'months')
        })
    }

    afterMonth = () => {
        this.setState({
            current: this.state.current.add(1, 'months')
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.beforeMonth}>&lt;</Button>
                <span>{this.state.current.format('YYYY년 M월')}</span>
                <Button onClick={this.afterMonth}>&gt;</Button>
                <div className="calendar_header">
                    <div className="box sun">일</div>
                    <div className="box">월</div>
                    <div className="box">화</div>
                    <div className="box">수</div>
                    <div className="box">목</div>
                    <div className="box">금</div>
                    <div className="box sat">토</div>
                </div>
                {this.generate()}
            </div>
        )
    }
            
}

export default connect(
    state => ({ user: state }),
    { }
)(Calendar)