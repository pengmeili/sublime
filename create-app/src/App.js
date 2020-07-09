import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    add(e) {

        // this.setState({
        //     count: this.state.count+1
        // })
        
        this.setState((prevState, prevProps) => ({
            count: prevState.count+1
        }), () =>{
            console.log(this.state.count)
        })
    }

    render() {
        return (
            <div>
                <div>{ this.state.count }</div>
                <button onClick={(e) => this.add(e)}>+1</button>
            </div>
        );
    }
}

export default App;