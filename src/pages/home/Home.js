import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import fireStore from '../../fireStore/fireStore';
import { connect } from 'react-redux';
import { login, logout } from '../../store/user';

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: ''
        }
    }

    login = (event) => {
        event.preventDefault();
        var userData = fireStore.collection('users').doc(this.state.userName);
        userData.get().then(doc => {
            if (doc.exists) {
                this.props.login(doc.data().userId);
            } else {
                console.log('not exist user');
            }
        }).catch(error => {
            console.error(error);
        })
    }

    logout = (event) => {
        this.props.logout();
    }

    handleNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    render () {
        return (
            <div className="home">
                <form onSubmit={this.login}>
                    <TextField 
                    id="userName"
                    name="userName"
                    onChange={this.handleNameChange}
                    label="이름"></TextField>
                    <Button type="submit">LOGIN</Button>
                </form>
                <Button type="button" onClick={this.logout}>LOGOUT</Button>
                <div><Link to="work">출퇴근</Link></div>
                <div><Link to="study">공부 타이머</Link></div>
                <div><Link to="logs">기록확인</Link></div>
            </div>
        );
    }
}

export default connect(
    state => ({ user: state }),
    { login, logout }
) (Home);