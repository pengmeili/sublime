import React, { Component } from 'react';

// 插槽的使用
class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    handleClick= () => {
        this.setState((prevState, prevProps) =>({
            count: prevState.count + 1
        }))
    }
    render() {
        return (
            <div>
                <h1>这里是插槽</h1>
                { this.props.children }
                <ChildrenSlot>
                    <h2 data-position="header" onClick={this.handleClick}>购物车数量为:{this.state.count}</h2>
                    <h2 data-position="main">这里是主体内容</h2>
                    <h2 data-position="footer">这里是底部内容</h2>
                </ChildrenSlot>
            </div>
        );
    }
}

class ChildrenSlot extends Component {
    render() {
        let { headerCom, mainCom, footerCom } = this.props.children
        this.props.children.forEach((item, index) => {
            switch(item.props['data-position']) {
                case 'header':
                    headerCom = item;
                    break
                case 'main':
                    mainCom = item;
                    break
                case 'footer':
                    footerCom = item;
                    break
            }
        })
        return (
            <div>
               <div className="header">{headerCom}</div>
               <div className="main">{mainCom}</div>
               <div className="footer">{footerCom}</div>
            </div>
        );
    }
}


export default Slot;