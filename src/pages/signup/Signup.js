import React from 'react'
import fireStore from '../../fireStore/fireStore';
import { TextField, Button } from '@material-ui/core'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userName: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            ...this.state,
            userName: e.target.value
        })
    }

    handleIdChange = (e) => {
        this.setState({
            ...this.state,
            userId: e.target.value
        })
    }

    handleClickSignup = () => {
        fireStore.collection('users').doc(this.state.userId).get().then(result => {
            if (result.exists) {
                alert('존재하는 ID');
                return;
            } else {
                fireStore.collection('users').doc(this.state.userId).set({
                    name: this.state.userName,
                    userId: this.state.userId,
                    regDate: new Date()
                }).then(() => {
                    this.props.history.push('/');
                })
            }
        });
    }

    render() {
        return (
            <div>
                <p>사용자 등록</p>
                <TextField
                    name="userId"
                    onChange={this.handleIdChange}
                    label="아이디"
                ></TextField>
                <TextField
                    name="userName"
                    onChange={this.handleNameChange}
                    label="이름"
                ></TextField>
                <Button 
                    onClick={this.handleClickSignup}
                >SIGNUP</Button>
            </div>
        )
    }
            
}

export default Signup;