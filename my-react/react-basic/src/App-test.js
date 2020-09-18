import React, { Component } from 'react';

class MyBtn extends Component {
  render() {
    return (
      <button>{ this.props.title }</button>
    );
  }
}

class Comment extends Component {
  handleClick = () => {
    this.props.add('子传父')
  }
  render() {
    return (
      <div className="comment">
        {/* 两种方式都可以，推荐使用第二种es6 */}
        <UserInfor user={this.props.user}></UserInfor>
        <UserInfor {...this.props}></UserInfor>
        <div className="comment-content">发布内容：{this.props.user.content}</div>
        <div className="comment-dta">发布时间：{this.props.user.date}</div>
        <button onClick={this.handleClick}>点击</button>
      </div>
    );
  }
}

class UserInfor extends Component {
  render() {
    return (
      <div className="user-infor">
        <img src={this.props.user.avatarUrl} width="50" height="50" alt=""/>
        <div className="username">{this.props.user.username}</div>
      </div>
    );
  }
}


export default class App extends Component {
  // 必须使用render函数，能将虚拟DOM渲染成真实DOM
  constructor(props) {
    super(props);
    this.user = {
      avatarUrl: './static/girl.png',
      username: 'xiaohei',
      content: '这是一个很搞笑的事情',
      date: new Date().toLocaleTimeString(),
      val: 'hello'
    }
  }
  add(val){
    alert(val)
  }
  render() {
    return (
      <div>
        <h2>App，{ this.props.name }</h2>
        <MyBtn title="添加"/>
        <MyBtn title="删除"/>
        <MyBtn title="修改"/>
        <Comment user={this.user} add={this.add}></Comment>
      </div>
    )
  }
}
