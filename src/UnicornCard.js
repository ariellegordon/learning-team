import React, { Component } from "react";

const UnicornCard = props => {
  // const { unicorn } = props;
  return (
    <div className="col-4">
      <h1>My name is {props.unicorn.name}</h1>
      <img src={props.unicorn.imageUrl} />
      <p>I am {props.unicorn.age} years old</p>
    </div>
  );
};

export default UnicornCard;
