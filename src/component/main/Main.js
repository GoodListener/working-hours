import React from 'react';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '-',
      end: '-'
    }
  }

  handleClickStartWork = () => {
    var date = new Date();
    var start = date.getHours() + '시 ' + date.getMinutes() + '분 ' + date.getSeconds() + '초';
    this.setState({
      start: start
    });
  }

  handleClickEndWork = () => {
    var date = new Date();
    var end = date.getHours() + '시 ' + date.getMinutes() + '분 ' + date.getSeconds() + '초';
    this.setState({
      end: end
    });
  }

  render() {
    return ( 
      <div className="Main">
        <div id="start" className="start_work">{this.state.start}</div>
        <div id="end" className="end_work">{this.state.end}</div>
        <div id="buttonBox" className="button_box">
            <button className="work_btn default" onClick={this.handleClickStartWork}>{this.props.start}</button>
            <button className="work_btn default" onClick={this.handleClickEndWork}>{this.props.end}</button>
        </div>
      </div>
    ); 
  }
}

export default Main;