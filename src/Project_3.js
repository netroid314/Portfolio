import { Component } from "react";
import {withRouter} from 'react-router-dom'
import './Project1.css'

class Work_3 extends Component{

    render(){
        return (
            <div className='work1'>
                <div className = 'image_box' onClick = {this.moveToDetail}>

                </div>
                <div className = 'project_brief'>
                    <p className='project_brief_text'>Project Name: VBDB</p>
                    <p className = 'project_brief_text'>Project Period: 2021.09 ~ 2021.10</p>
                    <p className = 'project_brief_text'>Participants: 송용욱</p>
                    <p className = 'project_brief_text'>Used Tech stacks: VB.net, MSSQL</p>
                    <p className = 'project_brief_text'>Participate as: Main Developer</p>
                    <p className = 'project_brief_text'>URL: None</p>
                    <p className = 'project_brief_text'>Brief: VB.net과 MSSQL을 활용한 DB 관리<br/> 시스템입니다. 현재 사용중인 프로그램으로<br/> 소스코드 공개는 불가합니다.</p>
                </div>
            </div>
        )
    }

    moveToDetail =()=>{
        this.props.history.push({
            pathname: "/desc",
            state: {
                project_id: 3
            }
        })
    }
}

export default withRouter(Work_3)