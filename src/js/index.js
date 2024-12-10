//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let time = 0;

//render your react application
//ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter segundos = {time} />);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<SecondsCounter segundos = {String(time).padStart(6, '0')} />);
setInterval(() => {
    time++
    root.render(<SecondsCounter segundos = {String(time).padStart(6, '0')} />);
}, 1000);
