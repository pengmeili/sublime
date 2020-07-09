// react-redux
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        const value = this.props.value;
        const onAddClick = this.props.onAddClick;
        const onDecrementClick = this.props.onDecrementClick;

        return (
            <div>
                <h1>计数的数量：{value}</h1>
                <button onClick={onAddClick}>数据+1</button>
                <button onClick={onDecrementClick}>数据-1</button>
                <button onClick={this.props.onAddClick5}>数据+5</button>
            </div>
        );
    }
}

const addAction = {
    type: 'ADD'
}
const decrementAction = {
    type: 'DECREMENT'
}

let ActionFnObj = {
    ADD: function(state, action){
        state.num++
        return state
    },
    ADD5:function(state, action){
        state.num = state.num + action.num;
        return state
    },
    DECREMENT: function(state, action){
        state.num--
        return state;
    }
}

function reducer(state={num: 0}, action) {
   if(action.type.indexOf('redux') === -1){
    state = ActionFnObj[action.type](state, action)
    return {...state}
   } else{
       return state;
   }
}

// function reducer(state={num: 0}, action) {
//     switch(action.type){
//         case 'ADD':
//             state.num++;
//             break;
//         case 'DECREMENT':
//             state.num --;
//             break;
//         default:
//             break;
//     }
//     return {...state}
// }

const store = createStore(reducer);
// 将state映射到props函数
function mapStateToProps(state){
    return {
        value: state.num
    }
}

// 将修改state数据的方法,映射到props,默认会传入store里的dispatch方法
function mapDispacthToProps(dispatch){
    return {
        onAddClick:() => {
            dispatch(addAction)
        },
        onAddClick5: ()=> {
            dispatch({type: 'ADD5', num: 5})
        },
        onDecrementClick: ()=>{
            dispatch(decrementAction)
        }
    }
}

// 将上面的这两个方法,将数据仓库的state和修改state的方法映射到组件上,形成新的组件;
const App = connect(
    mapStateToProps,
    mapDispacthToProps
)(Counter)

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector('#root')
)


export default Counter;