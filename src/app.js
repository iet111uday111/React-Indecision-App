console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are the options' : 'No Options'}</p> 
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let count = 0;
const addone = () =>{
    count++;
    console.log('addOne',count);
    renderCounterFunction();
}

const minusOne = () =>{
    count--;
    console.log('minusOne',count);
    renderCounterFunction();
}

const reset = () =>{
    count=0;
    console.log('reset',count);
    renderCounterFunction();
}



const appRoot = document.getElementById('app');

const renderCounterFunction = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> {
                count++;
                console.log('AddOne',count);
                renderCounterFunction();
            }}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterFunction();