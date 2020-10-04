import React, { Component } from "react"
import axios from 'axios'
import Chart from "./Chart"

class Main extends Component {
  getData() {
    const data = axios.get('raspberrypi.local:8081/conditions')
    return data
  }

  render() {
    return (
      <div className="container">
        <div className="container text-right my-2">
          <button onClick={this.getData} type="button" className="btn btn-primary">取得</button>
        </div>
        <Chart />
      </div>
    )
  }
}

export default Main
