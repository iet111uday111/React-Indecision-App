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
    age : 16,
    location : 'Pune'
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }else{
        return <p>Location: Unknown</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);