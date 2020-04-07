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

  componentDidUpdate(prevProps){
    if (this.props !== prevProps) {
      this.setState({
        ...this.state,
        start: this.formatDate(new Date(this.props.startTime)),
        end: this.formatDate(new Date(this.props.endTime))
      })
    }
  }

  formatDate = (date) => {
    if (date.toString() === "Invalid Date") {
      return "-";
    }
    return date.getHours() + '시 ' + date.getMinutes() + '분 ' + date.getSeconds() + '초';
  }

  handleClickStartWork = () => {
    // this.setState({
    //   start: this.formatDate(new Date())
    // });
    this.props.onClickStartTime(new Date());
  }

  handleClickEndWork = () => {
    // this.setState({
    //   end: this.formatDate(new Date())
    // });
    this.props.onClickEndTime(new Date());
  }

  handleClickCompleteWork = () => {
    this.props.onClickComplete();
  }

  render() {
    return ( 
      <div className="Main">
        <div id="start" className="start_work">{this.state.start}</div>
        <div id="end" className="end_work">{this.state.end}</div>
        <div id="buttonBox" className="button_box">
            <button className="work_btn default" onClick={this.handleClickStartWork}>{this.props.startWord}</button>
            <button className="work_btn default" onClick={this.handleClickEndWork}>{this.props.endWord}</button>
        </div>
        {(() => {
          if (this.state.start !== '-' && this.state.end !== '-') {
            return (
              <div>
                  <button className="work_btn" onClick={this.handleClickCompleteWork}>complete</button>
              </div>
            )
          } 
        })()}
      </div>
    ); 
  }
}

export default Main;