import React, { Component } from 'react'

class SubCount extends Component {
    componentWillReceiveProps(newProps) {
        console.log('子组件将要接收新属性', newProps)
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


export default class lifeCircle extends Component {
    static defaultProps = {
        // 1、加载默认的属性
        name: 'brain',
        age: 6
    }
    constructor(props) {
        super(props);
        console.log('1、加载默认状态');
        this.state = {
            count: 0
        }
    }
    componentWillMount() {
        console.log('2、父组件将要被挂载!')
    }
    componentDidMount() {
        // 当前的这个方法中请求数据然后数据驱动视图
        console.log('4、父组件挂载完成了！')
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 性能的优化点 shouldComponentUpdate 方法默认返回就是true，也就是每次都会更新
        console.log('5、组件是否要更新');
        console.log(nextProps)
        // 如果是偶数时才重新渲染
        if(nextState.count%2===0){
            return true
        } else {
            return false
        }
    }
    componentWillUpdate() {
        console.log('7、组件将要更新');
    }
    componentDidUpdate() {
        console.log('8、组件已经更新')
    }
    componentWillUnmount(){
        console.log('组件卸载完成')
    }
    handleClick = ()=>{
        this.setState((prevState, prevProps) => ({
            count: prevState.count + 1
        }),() => {
            console.log(this.state.count)
        })
    }
    render() {
        console.log('3、父组件(render)了')
        return (
            <div>
                <h2>当前的值：{this.state.count}</h2>
                <button onClick={this.handleClick}>+1</button>
                <SubCount count={this.state.count}/>
            </div>
        )
    }
}
