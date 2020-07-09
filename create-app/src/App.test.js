import React, {Component } from "react";
import './App.css';
import Logo from './logo.svg';

// 组件思想： App => Comment => UserInfo => Avatar
class MyButton extends Component {
  render() {
    return (
      <button>{this.props.title}</button>
    );
  }
}


class Avatar extends Component {
  render() {
    return (
      <img src={ this.props.avatarUrl } alt="" width="100" />
    );
  }
}


class UserInfo extends Component {
  render() {
    return (
      <div className="userInfor">
          <Avatar avatarUrl={this.props.avatar}/>
          <div className="username">{ this.props.name }</div>
        </div>
    );
  }
}


class Comment extends Component {
  handleClick = () => {
    this.props.add('这是从子组件中传过来的')
  }
  render() {
    return (
      <div className="comment">
          {/* 如果传时传入多个参数，可以使用解构的方式，推荐 */}
          <UserInfo {...this.props.user}></UserInfo>
          {/* <UserInfo avatar={this.props.user.avatar} name={ this.props.user.name }></UserInfo> */}
          <div className="comment-content">
            评价内容：{ this.props.user.content }
          </div>
          <div className="comment-time">
            发布时间：{ this.props.user.date }
          </div>
          <button onClick={this.handleClick}>子传父</button>
        </div>
    );
  }
}



class App extends Component{
  constructor(props){
    super(props);
    this.user = {
      avatar: "https://image-store.zui.com/shop_v4/images/motoImages/lenovo-logo-vertical.svg",
      name: 'pengmeili',
      content: '这是我的react组件',
      date: new Date().toLocaleDateString(),
      val: 'hello'
    }
  }

  add(val) {
    console.log(val)
  }

  // 必须要有render函数，能将虚拟dom渲染成真实DOM
  render() {
    // 它会将jsx所接收的属性转换成为单个对象传递到组件，这个对象我们叫做props
    return (
      <div>
        <img src={Logo} width="100" alt=""/>
        <h2>{this.user.val},{this.props.name}</h2>
        <MyButton title="提交" />
        <Comment user={this.user} add={this.add}/>
      </div>
    )
  }
}

export default App;

