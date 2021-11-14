import './App2.css';
import { Component } from 'react';
import React from 'react';
import './career_box.css';


class Career_box extends Component {
  state = {
    animation_enabled: false,
    fontSize: 10,
    fontcoloridx: 0
  }

  render() {
    return (
        <div className="career_box">
            <div className="inner_box">
                <p className = "period">2015.03 ~ 2022.03(예정)</p><p className = "done">아주대학교 소프트웨어학과</p>
            </div>
            <div className="inner_box">
              <p className = "period">2016.09 ~ 2017.03</p><p className = "done">FHOOE Hagenberg Campus 교환학생 파견</p>
            </div>
            <div className="inner_box">
              <p className = "period">2017.09 ~ 2019.08</p><p className = "done">공군 무기정비병</p>
            </div>
            <div className="inner_box">
              <p className = "period">2020.07 ~ 2021.02</p><p className = "done">이쿠얼키 인턴 근무 (게임개발 등등)</p>
            </div>
        </div>
    )
};
}



export default Career_box;
