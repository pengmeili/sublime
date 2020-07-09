import React, { Component } from 'react';
import Redux, { createStore } from 'redux';

const reducer = function(state={num: 0}, action) {
    console.log(action)
    switch(action.type) {
        case 'add':
            state.num++;
            break;
        case 'decrement':
            state.num--;
            break;
        default:
            break;
    }
    return {...state}
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store)

class TestRedux extends Component {
    add = () => {
        // 通过仓库的方法dispatch方法进行修改数据
        store.dispatch({type: 'add', content: {name: 'test'}})
        console.log(store.getState())
    }
    
    decrement = () =>{
        store.dispatch({type: 'decrement'})
        console.log(store.getState())
    }

    render() {
        return (
            <div>
                <h1>计数数量：{store.getState().num}</h1>
                <button onClick={this.add}>计数+1</button>
                <button onClick={this.decrement}>计数-1</button>
            </div>
        )
    }
}

export default TestRedux;
