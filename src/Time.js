import React, { Component } from 'react'
import Timer from './Timer'


export default class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer : 0,
            run : false
        }
        setInterval(
          () => {
            if(this.state.run)
              this.setState({
                  timer: this.state.timer + 1000
              })
          },
          1000
      )
    }
    start = () => {
      this.setState({run:!this.state.run})
    }
    reset = () => {
      this.setState({
        timer:0,
        run:false
      })
    }
  render() {
    return (
      <div className="contour">
        <div className="header"></div>
        <div className="main">
        <Timer t={this.state.timer}/>
            <div className="unite">
              <span>Hour</span>
              <span>Minute</span>
              <span>Second</span>
            </div>
            <div className="button">
                  <button className="start" onClick={this.start}>{this.state.run ? 'Stop' : 'Start'}</button>
                  <button className="reset" onClick={this.reset}>Reset</button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}
