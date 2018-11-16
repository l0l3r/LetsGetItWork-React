import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

//test commit
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
    changeAgeHandler = (event) => {
        this.setState({persons: [
            {name: 'Zaal', age: 25},
            {name: 'Irakli', age: 25},
            {name: 'Bacho', age: event.target.value}
        ]});
    };


    render() {
        const inlineStyleForButton = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid green',
            padding: '8px',
            cursor: 'pointer'

        }
        return (
            <div className="App">
                <Person name={this.state.persons[0]["name"]} age={this.state.persons[0]["age"]}/>
                <Person name={this.state.persons[1]["name"]} age={this.state.persons[1]["age"]}> I love Front-End Development! </Person>
                <Person changed={this.changeAgeHandler} click={this.switchNameHandler} name={this.state.persons[2]["name"]} age={this.state.persons[2]["age"]}/>
                <button style={inlineStyleForButton} onClick={this.switchNameHandler}>Switch</button>
            </div>
        );
    }
}

export default App;
