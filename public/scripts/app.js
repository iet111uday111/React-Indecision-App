'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are the options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var count = 0;
var addone = function addone() {
    count++;
    console.log('addOne', count);
    renderCounterFunction();
};

var minusOne = function minusOne() {
    count--;
    console.log('minusOne', count);
    renderCounterFunction();
};

var reset = function reset() {
    count = 0;
    console.log('reset', count);
    renderCounterFunction();
};

var appRoot = document.getElementById('app');

var renderCounterFunction = function renderCounterFunction() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    count++;
                    console.log('AddOne', count);
                    renderCounterFunction();
                } },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterFunction();
