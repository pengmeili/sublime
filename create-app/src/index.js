import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Button} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class App extends Component {
    async componentWillMount() {
        const page = 2
        let httUrl = `http://localhost:8080/api/rtimu?page=${page}`
        const res = await axios.get(httUrl)
        console.log(res.data)
    }
    render() {
        return (
            <Button>1111</Button>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)