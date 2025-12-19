import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState ={
    todos:[{id:"abc",task: "demo-task",isdone: false}],
}

export const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: { 
        addTodo : (state,action) =>{
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isdone: false
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        markAdDone: (state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    if(todo.isdone == false){
                        todo.isdone = true;
                    }else{
                        todo.isdone = false;
                    }    
                }
            })
        },
    }
})

export const {addTodo, deleteTodo, markAdDone} = todoslice.actions;
export default todoslice.reducer;