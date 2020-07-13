import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

class Home extends React.Component {
  render() {
    return (
        <div>
           <Button onClick={this.goDatiPage}>随时答题</Button>
           <Button>闯关答题</Button>
        </div>
    );
  }
  goDatiPage = () => {
      console.log(this.props)
      this.props.history.push('/dati')
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
)(Home)

export default App;
