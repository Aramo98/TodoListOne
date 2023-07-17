
import { useState } from "react"
function TodoHeader({OnAdd,error}) {
    const [value,setValue] = useState("");
    const clickButton = (evt) =>{
        evt.preventDefault()
        OnAdd(value);
        setValue("")
    }

   
    return(
        <>
        <div className="header">
            <form action=""  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <input type="text" value={value}  onChange={(e)=>setValue(e.target.value)} placeholder="type here"/>
                
                <button style={value === ""? {display:"none"}:{display:"flex"}}  onClick={clickButton}>ADD</button>
            </form>
            {error}
        </div>
        </>
    )
}

export default TodoHeader