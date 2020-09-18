import React, {Component} from 'react';

class NoControlInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      selectArr: []
    }
  }

  handleUserName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword =(e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.username && this.state.password && this.state.selectArr && this.state.selectArr.length > 0) {
      //  发送ajax请示
      let arr = this.state.selectArr.map(n => (`${n}`))
      alert(`当前用户名为${this.state.username}，我的爱好为：${arr}`)
    }
  }

  handleSelect = (e) => {
    let newArr = [...this.state.selectArr]
    newArr.push(e.target.value)
    this.setState({
      selectArr: newArr
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="username">
          <label htmlFor="name">用户名：</label>
          <input type="text" value={this.state.username} onChange={this.handleUserName}/>
        </p>
        <p className="password">
          <label htmlFor="pwd">密码：</label>
          <input type="text" value={this.state.password} onChange={this.handlePassword}/>
        </p>
        我的爱好：
        <select multiple value={this.state.selectArr} onChange={this.handleSelect}>
          <option value="drink">喝酒</option>
          <option value="tangtou">烫头</option>
          <option value="shouyan">抽烟</option>
        </select>
        <input type="submit" value="登录"/>
      </form>
    );
  }
}

export default NoControlInput;