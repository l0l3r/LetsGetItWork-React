import React from 'react';

const person = (props) => {
    return <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old! {props.children}</p>
}

export default person;