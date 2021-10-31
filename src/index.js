import React from "react";
import ReactDom from "react-dom";

const fName = "Srgl";
const lName = "Brkchn";
const luckyNumb = 13;

ReactDom.render(
    <div>
    <h1>Hi {fName} {lName}!</h1>
    <p>Your lucky number is: {luckyNumb}</p>
    </div>
, document.getElementById("root"));