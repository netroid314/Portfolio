import { Component } from "react";
import {withRouter} from 'react-router-dom'
import  './Project1.css';

class Work_2 extends Component{

    render(){
        return (
            <div className='work2'>
                <div className = 'image_box2' onClick = {this.moveToDetail}>

                </div>
                <div className = 'project_brief'>
                    <p className='project_brief_text'>Project Name: DAIG</p>
                    <p className = 'project_brief_text'>Project Period: 2021.03 ~ 2021.06</p>
                    <p className = 'project_brief_text'>Participants: 송용욱, 정원종 등등</p>
                    <p className = 'project_brief_text'>Used Tech stacks: Python3, Tensorflow,<br/> Pyqt, Django etc.</p>
                    <p className = 'project_brief_text'>Participate as: Team Leader, Full-stack Developer</p>
                    <p className = 'project_brief_text'>URL: <a href="https://github.com/ASWCS-Life" target="_blank">https://github.com/ASWCS-Life</a></p>
                    <p className = 'project_brief_text'>Brief: DAIG는 딥러닝 학습 시간의 단축을 위해 개발한<br/> 네트워크 기반 다중 PC 분산학습 시스템입니다.</p>
                </div>
            </div>
        )
    }

    moveToDetail =()=>{
        this.props.history.push({
            pathname: "/desc",
            state: {
                project_id: 2
            }
        })
    }

}

export default withRouter(Work_2)