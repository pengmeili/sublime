import React, {Component} from 'react';

// 受控组件：受状态控制的组件，需要与状态进行相应的绑定
class ControlInput extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      val: '', // 设置默认值
      data: []
    })
  }

  handleChange = (e) => {
    let val = e.target.value;
    this.setState({
      val: val
    })
  }

  handleClick = () => {
    if(this.state.val) {
      let newArr = [...this.state.data] // 复制出一个新的数组
      newArr.push(this.state.val)
      this.setState({
        data: newArr
      })
      this.setState({
        val: ''
      })
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.val} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>添加</button>
        <ul>
          {
            this.state.data && this.state.data.map((item, i) => {
              return <li key={i}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default ControlInput;