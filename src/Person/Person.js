import React from 'react';

const person = (props) => {
    return (<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old! {props.children} <input type = "text" onChange={props.changed} value={props.age}/></p> )
}

export default person;