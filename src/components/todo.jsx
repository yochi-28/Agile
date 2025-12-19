import { useSelector } from "react-redux"
import AddForm from "../components/addForm"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo, markAdDone } from "../features/todo/todoslice";
import { useDispatch } from "react-redux";
import './Todostyle.css'

export default function todo(){
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();

    const clickHandler = (id)=>{
        dispatch(deleteTodo(id));
    }
    return(
        <div>
            <h2 class="font-bold text-4xl italic">Todo List Appd!! &#9829;</h2>
            <h2>Todo List App</h2>
            <AddForm/>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id} class="pt-5 point" onClick={()=>dispatch(markAdDone(todo.id))} style={todo.isdone?({textDecoration:"line-through"}):null}>{todo.task}&nbsp;&nbsp;<Button onClick={()=>clickHandler(todo.id)} variant="outlined" startIcon={<DeleteIcon />}>
                        </Button></li>
            ))}
        </ul>        
        </div>
    )
}