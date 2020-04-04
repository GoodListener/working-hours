import React from 'react'
import Header from '../../component/header/Header'
import Main from '../../component/main/Main'

export default function(props) {

    function getDate () {
        var date = new Date();
        return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'
    }

    return (
        <div className="App">
            <Header date={getDate()}></Header>
            <Main startWord="시작" endWord="끝"></Main>
        </div>
    );
}