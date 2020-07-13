import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';
import fns from '../store/asyncMethods'

class DatiCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimu: 0
    }
  }

  componentWillMount() {
    this.props.getTimu()
  }

  render() {
    // console.log(this.props.timuList)
    const list = this.props.timuList
    const cur = this.state.currentTimu

    if(list.length > 0) {
      return (
        <div>
          <h1>题目：{list[cur].quiz}</h1>
          <ul>
            <li>题目列表</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>loading....</div>
      )
    }
  }
}

// 将state映射到props函数
function mapStateToProps(state){
    return {...state}
}

// 将修改state数据的方法,映射到props,默认会传入store里的dispatch方法
function mapDispacthToProps(dispatch){
    return {
        getTimu: async () => {
          let list = await fns.TimuList()
          dispatch({
            type: "SET_TIMU", 
            content: list
          })
          console.log(list)
        }
    }
}

// 将上面的这两个方法,将数据仓库的state和修改state的方法映射到组件上,形成新的组件;
const Dati = connect(
    mapStateToProps,
    mapDispacthToProps
)(DatiCom)

export default Dati;
