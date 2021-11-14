import './App2.css';
import { Component } from 'react';
import React from 'react';
import Career_box from './career_box';
import Work_1 from './Project_1';
import Work_2 from './Project_2';
import Work_3 from './Project_3'

const intro_text = "This will be portfolio of SYU.\n Brief cv and works are listed here"
var change_interval

class App2 extends Component {
  state = {
    animation_enabled: false,
    fontSize: 10,
    fontcoloridx: 0
  }

  fontcolorlist = ['red','blue','green']

  render() {
    return (<div className="App2">
      <div className="intro">
        <img onLoad = {this.changeColor} />
        <p onClick = {this.changeColor} className = "introtext" id="intro" style={Object.assign(this.styles.move)}>{intro_text}</p>
      </div>
      <Career_box></Career_box>
      <Work_1></Work_1>
      <Work_2></Work_2>
      <Work_3></Work_3>
    </div>
    )
  };

  changeColor = (e)=>{
    console.log("WHAT")
    var next_color_idx = this.state.fontcoloridx + 1

    this.setState({fontcoloridx:next_color_idx},()=>{
      next_color_idx = this.state.fontcoloridx + 1
      if (next_color_idx >= this.fontcolorlist.length){
        next_color_idx = 0
      }
      this.styles.move = {
        color: this.fontcolorlist[next_color_idx]
      }
    })

    if (change_interval){
      clearInterval(change_interval)
    }
    change_interval = setInterval(() => {
      this.setState({fontcoloridx:next_color_idx},()=>{
        next_color_idx = this.state.fontcoloridx + 1
        if (next_color_idx >= this.fontcolorlist.length){
          next_color_idx = 0
        }
        this.styles.move = {
          color: this.fontcolorlist[next_color_idx]
        }
      })
    }, 1500);
  }
  
  styles = {
    move:{
      fontSize: 30
    }
  }
}



export default App2;
