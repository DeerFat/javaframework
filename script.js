function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </header>
    );
}

function TodoList(props) {
    return (
        <div className="todo-list">
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <input type="checkbox" checked={todo.completed} readOnly /> {todo.text}
                    </li>
                ))}
            </ul>
            <button className="remove-button">Remove Completed</button>
        </div>
    );
}

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} className="card-image"/>
            <h2 className="card-title">{props.title}</h2>
            <h3 className="card-subtitle">{props.subtitle}</h3>
            <p className="card-content">{props.content}</p>
        </div>
    );
}

function Footer(props) {
    return (
        <footer>
            <p>{props.message}</p>
            <p>Copyright © 2024 deerfat.ca. All rights reserved.</p>
        </footer>
    );
}

function App() {
    const todos = [
        { id: 1, text: "Buy a new Camera", completed: false },
        { id: 2, text: "Sell Useless Stuff", completed: false },
        { id: 3, text: "Complete React Assignment", completed: true },
    ];

    return (
        <div className="app">
            <Header title="Welcome to My Website!" message="Thanks for visiting my site." />
            <TodoList todos={todos} />
            <Card
                title="My Card Title"
                subtitle="My Card Subtitle"
                content="This is the content of my card."
                image="https://i1.sndcdn.com/avatars-OgwqrM6tdldYRJAM-QXCK2g-t500x500.jpg"
            />
            <Footer message="Contact me at contact@mywebsite.com" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));