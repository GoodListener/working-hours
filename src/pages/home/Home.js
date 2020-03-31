import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import fireStore from '../../fireStore/fireStore';

export default function() {
    console.log(fireStore.collection('user'));

    return (
        <div className="home">
            <form>
                <TextField 
                id="name" 
                label="이름"></TextField>
            </form>
            <div><Link to="work">출퇴근</Link></div>
            <div><Link to="study">공부 타이머</Link></div>
            <div><Link to="logs">기록확인</Link></div>
        </div>
    );
}