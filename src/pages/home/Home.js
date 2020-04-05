import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../component/login/Login'

class Home extends React.Component {
    render () {
        return (
            <div className="home">
                <Login></Login>
                <div><Link to="work">출퇴근</Link></div>
                <div><Link to="study">공부 타이머</Link></div>
                <div><Link to="logs">기록확인</Link></div>
            </div>
        );
    }
}

export default connect(
    state => ({ user: state }),
    { }
) (Home);