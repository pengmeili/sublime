import React, { Component } from 'react';
import Slot from './Slot';
import TestRedux from './TestRedux';

class FormSimple extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '11',
            password: '11',
            selectArr: []
        }
    }
    handleUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit =(e) => {
        e.preventDefault();
        if(this.state.username && this.state.password && this.state.selectArr && this.state.selectArr.length > 0){
            debugger
            let arr = this.state.selectArr.map(n => (`${n}`))
            alert(`当前用户名为：${this.state.username}, 当前密码为：${this.state.password}, 我的爱好是：${arr}`)
        }
    }
    handleSelectedChange = (e) => {
        let newArr = [...this.state.selectArr];
        newArr.push(e.target.value)
        this.setState({
            selectArr: newArr
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p className="username">
                        <label htmlFor="name">用户名：</label>
                        <input type="text" value={this.state.username} onChange={this.handleUserName}/>
                    </p>
                    <p className="password">
                        <label htmlFor="pwd">密码：</label>
                        <input type="password" value={this.state.password} onChange={this.handlePassword}/>
                    </p>
                    <p>
                        我的爱好是：
                        <select multiple onChange={this.handleSelectedChange}>
                            <option value="drink">喝洒</option>
                            <option value="smoking">抽烟</option>
                            <option value="tangtou">烫头</option>
                        </select>
                    </p>
                    <p>
                        <button type="submit">登录</button>
                    </p>
                </form>
                <Slot>
                    <h2 data-name="a" data-input={this.state.username}>子组件一</h2>
                    <h2 data-name="b">子组件二</h2>
                    <h2 data-name="c">子组件三</h2>
                </Slot>
                <TestRedux />
            </div>
        );
    }
}

export default FormSimple;