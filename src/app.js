console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle:'This is my subtitle'
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name :'uday',
    age : 26,
    location : 'Pune'
}

function getLocation(location){
    if(location){
        return location
    }else{
        return 'Unknown';
    }
}

var templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);