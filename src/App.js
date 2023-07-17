import { useReducer,useState } from "react";
import TodoFooter from "./component/todo-footer/TodoFooter";
import TodoHeader from "./component/todo-header/TodoHeader";
import TodoListItems from "./component/todo-list-items/TodoListItems";
import "./style.css"

function App() {
  const [error,setError] = useState("")
const reduce = (todos,action)=>{
if (action.type === "ADD") {
if (action.payload.text === 0 ) {
  setError("please Write Your todo list")
}else{
  return[
    ...todos,
    {
     id: new Date().getTime(),
     text: action.payload.text,
     isCompleted: false
    }
 
   ]
}
  
}

else if(action.type === "REMOVE"){
return todos.filter(todo=> todo.id !== action.payload.id)
}
else if(action.type === "COMPLETED"){
return todos.map(todo=>{
if (todo.id === action.payload.id) {
  return{
    ...todo,
    isCompleted: true
  }
}
return todo
})
}
else if(action.type === "REMOVE_ALL_COMPLETED"){
return todos.filter(todo=> !todo.isCompleted)

}

}
  const [todos,dispatch] = useReducer(reduce,[])
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
   <TodoHeader error={error} OnAdd={(text)=>{
  dispatch({
    type:"ADD",
    payload:{
      text
    }
  })
   }}/>
   <TodoListItems 
   onRemove={(id)=>{
    dispatch({
      type:"REMOVE",
      payload:{
        id
      }
    })
   }}
   todos={todos}

   onComplete ={(id)=>{
    dispatch({
      type:"COMPLETED",
      payload:{
        id
      }
    })
   }}
   />
    {todos.length > 0 ?
    
    <TodoFooter todos={todos.length}
    completedTodos ={todos.filter(todo=>todo.isCompleted).length}
    onRemoveAllCompleted = {()=>{
     dispatch({
       type:"REMOVE_ALL_COMPLETED",
   
     });
    }}/>
    :
    null
  }
    </div>
  );
}

export default App;
