import React, { Component } from "react"
import axios from 'axios'
import Chart from "./Chart"

// axios.defaults.headers.post["Content-Type"] =  "application/x-www-form-urlencoded";


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempGraph: {
        //   labels: [],
        //   datasets: [{
        //     data: [],
        //     label: "",
        //   }]
        // },
      },
    }
    this.getData = this.getData.bind(this)
  }

  async getData(){
    const data = await axios.get('/conditions')
    // const data = axios.get('/conditions')
    const times = data.data.map(data => data.create_at)
    const temp = data.data.map((data) => data.temp);
    const humid = data.data.map((data) => data.humid);
    const CPU_temp = data.data.map((data) => data.CPU_temp);
    this.setState((state)=>{
      return {
        tempGraph: {
          labels: times,
          datasets: [{
            data: temp,
            label: "温度"
          }]
        },
        times: times,
        temp: temp,
        humid: humid,
        CPU_temp: CPU_temp
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="container text-right my-2">
          <button onClick={this.getData} type="button" className="btn btn-primary">取得</button>
        </div>
        <Chart data = {this.state.tempGraph} />
      </div>
    )
  }
}

export default Main
