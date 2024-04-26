import React, { useEffect,useState } from 'react'
import Create from './Create'
import axios from 'axios'


const Home = () => {

    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3030/todos')
        .then(result=>setTodos(result.data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div className='home'>


            <h1>Todo List</h1>

            <Create />

            {
                todos.length === 0 ? <p>No todos</p> :
                    todos.map(todo => {
                        return(
                        <div>
                            {todo.task}
                        </div>
                        )
                    })
            }


        </div>
    )
}

export default Home