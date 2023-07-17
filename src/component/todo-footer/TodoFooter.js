function TodoFooter({todos,completedTodos,onRemoveAllCompleted}) {
    return(
        <>
        <div>
            <span>{completedTodos} / {todos}</span>
            <button onClick={onRemoveAllCompleted}>Remove All completes</button>
        </div>
        </>
    )
}

export default TodoFooter