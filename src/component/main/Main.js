import React from 'react';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startWork: '-',
      endWork: '-'
    }
  }

  handleClickStartWork = () => {
    var date = new Date();
    var startWork = date.getHours() + '시 ' + date.getMinutes() + '분 ' + date.getSeconds() + '초';
    this.setState({
      startWork: startWork
    });
  }

  handleClickEndWork = () => {
    var date = new Date();
    var endWork = date.getHours() + '시 ' + date.getMinutes() + '분 ' + date.getSeconds() + '초';
    this.setState({
      endWork: endWork
    });
  }

  render() {
    return ( 
      <div className="Main">
        <div id="startWork" className="start_work">{this.state.startWork}</div>
        <div id="endWork" className="end_work">{this.state.endWork}</div>
        <div id="buttonBox" className="button_box">
            <button id="startWorkBtn" className="work_btn default" onClick={this.handleClickStartWork}>출근</button>
            <button id="endWorkBtn" className="work_btn default" onClick={this.handleClickEndWork}>퇴근</button>
        </div>
      </div>
    ); 
  }
}

export default Main;