import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PieChart } from "react-minimal-pie-chart";
import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap-slider/dist/css/bootstrap-slider.css"


export class Home extends Component {
  displayName = Home.name

  state = {
    startDate: new Date(),
    currentValue: [1, 100],
    min: 1,
    max: 100

  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };


  changeValue = e => {
    this.setState({currentValue: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>{this.state.startDate.toString()}</h1>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <div style={{ height: 200 }}>
          <PieChart
            animate={true}
            data={[
              { title: "One", value: 100, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" }
            ]}
          />
        </div>
        <h2>Current slider value: {this.state.currentValue[0]} , {this.state.currentValue[1]}</h2>
        <ReactBootstrapSlider
          value={this.state.currentValue}
          slideStop={this.changeValue}
          max={this.state.max}
          min={this.state.min}/>
      </div>
    );
  }
}
