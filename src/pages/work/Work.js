import React from 'react'
import Header from '../../component/header/Header'
import Main from '../../component/main/Main'

export default function(props) {
    console.log(props);

    function getDate () {
        var date = new Date();
        return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'
    }

    return (
        <div className="App">
            <Header date={getDate()}></Header>
            <Main start="출근" end="퇴근"></Main>
        </div>
    );
}