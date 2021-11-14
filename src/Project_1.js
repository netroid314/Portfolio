import { Component } from "react";
import {withRouter} from 'react-router-dom'
import './Project1.css'

class Work_1 extends Component{

    render(){
        return (
            <div className='work1'>
                <div className = 'image_box' onClick = {this.moveToDetail}>

                </div>
                <div className = 'project_brief'>
                    <p className='project_brief_text'>Project Name: AjouTT</p>
                    <p className = 'project_brief_text'>Project Period: 2017.09 ~ 2017.12</p>
                    <p className = 'project_brief_text'>Participants: 송용욱, 이승준 등등</p>
                    <p className = 'project_brief_text'>Used Tech stacks: Vue, Node.Js</p>
                    <p className = 'project_brief_text'>Participate as: Front-end Developer</p>
                    <p className = 'project_brief_text'>URL: <a href="https://git.ajou.ac.kr/ajoutt/ajoutt_front_end" target="_blank">https://git.ajou.ac.kr/ajoutt/ajoutt_front_end</a></p>
                    <p className = 'project_brief_text'>Brief: AjouTT는 사용자의 라이프 스타일과<br/> 필수 과목, 기피 과목 고려에 초점을 둔<br/> 시간표 자동 생성 사이트입니다.</p>
                </div>
            </div>
        )
    }

    moveToDetail =()=>{
        this.props.history.push({
            pathname: "/desc",
            state: {
                project_id: 1
            }
        })
    }
}

export default withRouter(Work_1)