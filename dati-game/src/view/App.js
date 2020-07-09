import React from 'react'
import { connect } from 'react-redux'


class Counter extends React.Component {
    render() {
      console.log(this.props)
      const value = this.props.value;
      const onAddClick = this.props.onAddClick;
      const onDecrementClick = this.props.onDecrementClick;

      return (
          <div>
              <h1>计数的数量：{value}</h1>
              <button onClick={onAddClick}>数据+1</button>
              <button onClick={onDecrementClick}>数据-1</button>
              <button onClick={this.props.onAddClick5}>数据+5</button>
          </div>
      );
    }
}

// 将state映射到props函数
function mapStateToProps(state){
    return {
        value: state.num
    }
}

// 将修改state数据的方法,映射到props,默认会传入store里的dispatch方法
function mapDispacthToProps(dispatch){
    return {
        onAddClick:() => {
            dispatch({type: 'ADD'})
        },
        onAddClick5: ()=> {
            dispatch({type: 'ADD5', num: 5})
        },
        onDecrementClick: ()=>{
            dispatch({type: 'DECREMENT'})
        }
    }
}

// 将上面的这两个方法,将数据仓库的state和修改state的方法映射到组件上,形成新的组件;
const App = connect(
    mapStateToProps,
    mapDispacthToProps
)(Counter)

export default App;
