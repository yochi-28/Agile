import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoslice';

export default function addForm(){
    const [task,setTask] =useState("");
    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                   <TextField onChange={(e)=> setTask(e.target.value)} value={task} id="standard-basic" label="add task" variant="standard" /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
            </form>
        </div>
    )
}