const TodoListItem = ({todos,onRemove,onComplete})=>{
return todos.map(todo=>{
return(
    <>
     <div className="todo-list-item" key={todo.id}>
<label >

    <input type="checkbox" onChange={()=>onComplete(todo.id)} checked={todo.isComplited}/>
    <span>{todo.text}</span>
</label>
<button onClick={()=>onRemove(todo.id)}>Remove</button>
</div>
    </>
)
})
    
}

export default TodoListItem

