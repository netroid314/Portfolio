import './Project_Description.css';
import { Component } from 'react';
import {withRouter} from 'react-router-dom'

const project_desc_1 = "AjouTT는 대학생들의 수업 시간표를 만드는 과정을 편리하게 하고자 제작되었습니다. 대학교애서의 시간표는 필수로 들어야하는 수업과는 별개로 학점 수를 맞추기 위해\
전공 선택과목이나 교양 선택과목을 시간표에 추가합니다. 이때, 필수 과목과 시간이 겹치거나 개인상의 이유를 위해 자신에게 적합한 수업을 찾아야 합니다.\
이 과정은 많은 시간이 들며, 중간에 시간표를 잘못 확인하는 등의 실수를 할 수도 있습니다. AjouTT는 사용자의 필수 과목, 이수하고자 하는 학점 수 그리고 자신의\
생활 패턴 등의 요건을 확인하여, 사용자에게 가능한 최적의 시간표들을 제시해줍니다."

const project_desc_2 = "DAIG(Distributed A.I Grid)는 네트워크 기반의 딥러닝 분산 학습 시스템입니다. 다양한 PC들이 네트워크를 통해 분산 학습을 진행하며,\
PC 간의 서로 다른 계산 성능, 네트워크의 지연시간 문제 등 실상황에서 발생하는 변수들에 대응하기 위한 구조를 갖고 있습니다. 앞서 \
서술된 문제들을 해결하기 위해 K-batch Sync SGD 방식 기반으로 분산 학습을 진행하며, 응답 시간의 추가적인 threshold, 예상 잔여 학습 시간 등을\
통해 안정성과 효율성을 높이고자 하였습니다."

const project_desc_3 = "VBDB는 ** 공장의 자동화를 위한 DB 관리 프로그램입니다. VB.net과 MSSQL을 기반으로 하였으며, 주목적은 \
사용자들의 데이터베이스 열람 및 수정을 원활하게 하기 위한 프로그램입니다. 이 프로그램이 자동화를 주관하지는 않습니다."

var current_desc = "DUMMY CURRENT TEXT"

class Description extends Component {
  state = {
    project_id: -1
  }

  render() {
    this.state.project_id= this.props.location.state.project_id
    if(this.state.project_id == 1)
      current_desc = project_desc_1
    else if(this.state.project_id == 2)
      current_desc = project_desc_2
    else if(this.state.project_id == 3)
      current_desc = project_desc_3

    return (<div className="App2">
      <div className="home" onClick = {this.goback}>
        <p className="intext">메인 화면으로</p>
      </div>
      <div className="desc_box">
        <p>{current_desc}</p>
      </div>
    </div>
    )
  };

 
  goback = ()=>{
    console.log('back')
    this.props.history.goBack()
  }
}

export default withRouter(Description)
