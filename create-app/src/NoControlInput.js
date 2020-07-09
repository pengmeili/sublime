import React, { Component } from 'react'

export default class NoControlInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            val: ''
        }
    }
    handleChange = (e)=> {
        let val = this.refs.input.value
        this.setState({val})
    }
    render() {
        return (
            <div>
                <input ref="input" type="text" onChange={this.handleChange}/>
                <h2>{this.state.val}</h2>
            </div>
        )
    }
}
