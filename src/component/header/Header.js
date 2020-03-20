import React from 'react';
import './Header.css';

export default function (props) {
    return (
        <div id="header" className="header">{props.date}</div>
    )
}