import React from 'react'
import Header from './header/Header'
import Main from './main/Main'

export default function() {
    function getDate () {
        var date = new Date();
        return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'
    }

    return (
        <div className="App">
            <Header date={getDate()}></Header>
            <Main></Main>
        </div>
    );
}