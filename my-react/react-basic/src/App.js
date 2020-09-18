import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    // this.add = this.add.bind(this)
  }
  add = (val)=> {
    // 除了constructor之外的其它地址修改状态的唯一方法是调用this.setState()
    //  this.setState 是一个异步操作


    // this.setState({
    //   count: this.state.count+1
    // })
    this.setState((prevState, prevProps)=> ({
      count: prevState.count + 1
    }), () => {
      // 回调函数，在状态改变后执行，返回的是最新的值
      console.log(this.state.count)
    })

  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.add}>+1</button>
        {/*<button onClick={this.add.bind(this)}>+1</button>*/}
      </div>
    );
  }
}

export default App;
