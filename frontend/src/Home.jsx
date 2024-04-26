import React, { useEffect,useState } from 'react'
import Create from './Create'
import axios from 'axios'


const Home = () => {

    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3030/todos')
    },[])
    return (
        <div className='home'>


            <h1>Todo List</h1>

            <Create />

            {
                todos.length === 0 ? <p>No todos</p> :
                    todos.map((todo) => {
                        <>
                            {todo}
                        </>
                    })
            }


        </div>
    )
}

export default Home