import {useState} from 'react'
import './App.css'

function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');
    const handleChange = (event) => {
        setItem(event.target.value);
    }
    const handleAddItem = () => {
        setList([...list, item]);
    }
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleAddItem}>Add</button>
            {list.map(task => (
                <p>{task}</p>
            ))}
        </div>
    )
}

export default App
