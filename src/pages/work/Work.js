import React from 'react'
import Header from '../../component/header/Header'
import Main from '../../component/main/Main'
import fireStore from '../../fireStore/fireStore';
import { connect } from 'react-redux';

class Work extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startTime: '-',
            endTime: '-'
        }
        this.getDoc();
    }

    getDoc = () => {
        console.log(this.props)
        if (this.props.user.isLogined) {
            var userData = fireStore.collection('users').doc(this.props.user.userName);
            userData.collection('work')
            .where('start', '>=', this.getToday()).get().then(docs => {
                docs.forEach(doc => {
                    this.setState({
                        startTime: doc.data().start.seconds,
                        endTime: doc.data().end.seconds
                    })
                })
            })
        }
    }

    getToday = () => {
        var date = new Date().setHours(0,0,0,0);
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
            userData.collection('work').add(this.getDocDate())
        }
    }

    setEndTime = (date) => {
        if (this.props.user.isLogined) {

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
                    ></Main>
            </div>
        );
    }
}

export default connect(
    state => ({ user: state }),
    { }
)(Work)