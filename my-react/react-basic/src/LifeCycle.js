import React, {Component} from 'react';
import {defaultProps} from "antd-mobile/es/search-bar/PropsType";

class SubCount extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('子组件将要接收新的属性', nextProps)
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}


class LifeCycle extends Component {
  static defaultProps = {
    name: 'xiaohei',
    age: 18
  }
  constructor(props) {
    super(props);
    console.log('1、初始化加载默认的状态')
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
    console.log('2、父组件将要被挂载')
  }

  componentDidMount() {
    console.log('4、父组件挂载完成了')
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('7、组件将要更新')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('8、组件已更新完成')
  }

  componentWillUnmount() {
    console.log('组件卸载完成')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // 性能优化点
    console.log('5、组件是否要更新')
    if(nextState.count % 2 === 0) {
      return true
    } else {
      return false
    }
  }

  handleClick = () => {
    this.setState((prevState, prevProps) => ({ // 有返回真所以要加小括号
      count: prevState.count+1
    }), () => {
      console.log(this.state.count)
    })
  }
  render() {
    console.log('3、父组件render了')
    return (
      <div>
        <h2>当前的值：{this.state.count}</h2>
        <button onClick={this.handleClick}>+1</button>
        <SubCount count={this.state.count}></SubCount>
      </div>
    );
  }
}

export default LifeCycle;