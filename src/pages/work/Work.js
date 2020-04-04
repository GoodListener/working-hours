import React from 'react'
import Header from '../../component/header/Header'
import Main from '../../component/main/Main'
import fireStore from '../../fireStore/fireStore';
import { connect } from 'react-redux';
import { login } from '../../store/user';

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
            .where('start', '<=', new Date()).get().then(docs => {
                docs.forEach(doc => {
                    this.setState({
                        startTime: doc.data().start.seconds,
                        endTime: doc.data().end.seconds
                    })
                })
            })
        }
    }

    getDate = () => {
        var date = new Date();
        return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'
    }

    render () {
        return (
            <div className="App">
                <Header date={this.getDate()}></Header>
                <Main startWord="출근" endWord="퇴근" startTime={this.state.startTime} endTime={this.state.endTime}></Main>
            </div>
        );
    }
}

export default connect(
    state => ({ user: state }),
    { login }
)(Work)