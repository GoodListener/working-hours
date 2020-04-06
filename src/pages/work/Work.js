import React from 'react'
import Header from '../../component/header/Header'
import Main from '../../component/main/Main'
import fireStore from '../../fireStore/fireStore';
import { connect } from 'react-redux';

const RUNNING = 10;
const COMPLETE = 20;

class Work extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            id: null,
            startTime: '-',
            endTime: '-'
        }
        this.getDoc();
    }

    getDoc = () => {
        if (this.props.user.isLogined) {
            var userData = fireStore.collection('users').doc(this.props.user.userName);
            userData.collection('work')
            .where('start', '>=', this.getYesterday())
            .where('state', '==', RUNNING).get().then(docs => {
                docs.forEach(doc => {
                    this.setState({
                        id: doc.id,
                        startTime: doc.data().start.seconds ? doc.data().start.seconds : '-',
                        endTime: doc.data().end.seconds ? doc.data().end.seconds : '-',
                    })
                })
            })
        }
    }

    getYesterday = () => {
        var date = new Date();
        date.setHours(0,0,0,0);
        date.setDate(date.getDate() - 1);
        return date;
    }

    getDate = () => {
        var date = new Date();
        return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'
    }

    getDocDate = () => {
        var date = new Date();
        var year = date.getFullYear();
        var month = ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
        var day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate();

        return year.toString().substring(2,4) + month + day;
    }

    setStartTime = (date) => {
        if (this.props.user.isLogined) {
            var userData = fireStore.collection('users').doc(this.props.user.userName);
            if (this.state.id) {
                userData.collection('work').doc(this.state.id).set({
                    state: RUNNING,
                    start: date,
                    end: {}
                });
            } else {
                userData.collection('work').add({
                    state: RUNNING,
                    start: date,
                    end: {}
                }).then(res => {
                    this.setState({
                        id: res.id
                    })
                })
            }
        }
    }

    setEndTime = (date) => {
        if (this.props.user.isLogined) {
            var userData = fireStore.collection('users').doc(this.props.user.userName);
            if (this.state.id) {
                userData.collection('work').doc(this.state.id).update({
                    end: date
                });
            } else {
                alert('출근부터 해주세요.');
            }
        }
    }

    setComplete = () => {
        if (this.props.user.isLogined) {
            if (this.state.id) {
                var userData = fireStore.collection('users').doc(this.props.user.userName);
                userData.collection('work').doc(this.state.id).update({
                    state: COMPLETE
                }).then(res => {
                    console.log(res);
                })
            }
        }
    }

    render () {
        return (
            <div className="App">
                <Header date={this.getDate()}></Header>
                <Main 
                    startWord="출근"
                    endWord="퇴근" 
                    startTime={this.state.startTime} 
                    endTime={this.state.endTime}
                    onClickStartTime={this.setStartTime}
                    onClickEndTime={this.setEndTime}
                    onClickComplete={this.setComplete}
                    ></Main>
            </div>
        );
    }
}

export default connect(
    state => ({ user: state }),
    { }
)(Work)