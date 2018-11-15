import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Zaal', age: 25},
            {name: 'Irakli', age: 25},
            {name: 'Bacho', age: "undefined"}
        ]
    };
    switchNameHandler = () => {
        this.setState({persons: [
            {name: 'Zaal', age: 25},
            {name: 'Irakli', age: 25},
            {name: 'Bacho', age: 28}
        ]});
    }

    render() {
        return (
            <div className="App">
                <Person name={this.state.persons[0]["name"]} age={this.state.persons[0]["age"]}/>
                <Person name={this.state.persons[1]["name"]} age={this.state.persons[1]["age"]}> I love Front-End Development! </Person>
                <Person click={this.switchNameHandler} name={this.state.persons[2]["name"]} age={this.state.persons[2]["age"]}/>
                <button onClick={this.switchNameHandler}>Switch</button>
            </div>
        );
    }
}

export default App;
