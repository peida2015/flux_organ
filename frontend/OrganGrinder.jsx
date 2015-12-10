var ReactDOM = require('react-dom');
var React = require('react');
var Keyboard = require('./components/Keyboard');
var KeyListener = require('./util/KeyListener');


document.addEventListener("DOMContentLoaded", function () {
  // var root = document.querySelector("root");
  KeyListener();
  ReactDOM.render(
    <Keyboard />,
    document.getElementById("root")
  );
});
