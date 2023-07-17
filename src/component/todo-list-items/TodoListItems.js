import TodoListItem from "../todo-list-item/TodoListItem"

const TodoListItems = ({todos,onRemove,onComplete}) =>{
return(
    <>
    <div className="todo-list-items">
    <TodoListItem 
    todos={todos} 
    onRemove={onRemove}
     onComplete={onComplete}
     />
    </div>
    </>
)
}

export default TodoListItems