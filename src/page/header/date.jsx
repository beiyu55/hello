import React, { Component } from 'react';
import {
  // FormattedMessage,
  // FormattedHTMLMessage,
  FormattedDate,
  FormattedTime,
  // FormattedRelative,
  // FormattedNumber,
  // FormattedPlural,
} from 'react-intl';

class HeaderDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date()
    };
  }

  componentDidMount() {
    this.updateTime();
    this.timer = setInterval(() => { this.updateTime() }, 1000);
  }

  componentWillMount() {
    this.timer && clearTimeout(this.timer);
  }

  updateTime() {
    var date = new Date();
    this.setState({
      curTime: date
    })
  }

  render() {
    return (
      <div className="time-wrapper">
        <FormattedDate  value={this.state.curTime}/>&nbsp;
        <FormattedTime  value={this.state.curTime}/>
      </div>
    );
  }
}

export default HeaderDate;