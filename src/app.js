console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const onRemoveAll = () =>{
    app.options = [];
    render();
}

const onMakeDecision = () => {

    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
    
}


const appRoot = document.getElementById('app');

const numbers = [55, 11, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are the options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do</button>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <br/>
            {
                //Boolean, null, undefined,emptyString does not show up
                // [101,785,144,'Uday','','aditya',true,false,null,undefined,'singh']
                // [<p key="1">Uday</p>,<p key="2">aditya</p>,<p key="3">Singh</p>,<p key="4">Test</p>,<p key="5">Test2</p>]
                // numbers.map((number,index) =>{
                //     return <p key={index}>Number: {number}</p>
                // })

                
            }
            {
                app.options.map((option,index) => <ul key={index}><li>{option}</li></ul>)
            }
            
            <br/>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();