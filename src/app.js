console.log('App.js is running!');

// JSX - JavaScript XML
var template = 
<div><h1>Indecision App</h1><p>This is some Info</p></div>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);