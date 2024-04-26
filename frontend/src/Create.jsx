import React from 'react'
import axios from 'axios'


const Create = () => {


    const [task, setTask] = React.useState('')
    function handleAdd() {

        axios.post('http://localhost:3030/add', { task: task }).then((res) => {   
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })


    }
    return (
        <div className='create-form'>



            <input type="text" placeholder='Enter Task' onChange={(e)=>{setTask(e.target.value)}}/>
            <button type='button' onClick={handleAdd}> Add</button>
        </div>
    )
}

export default Create