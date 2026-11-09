import { useEffect,useState } from 'react'
import './todo.css'

function Todo(){
    const [list, setList] =  useState<String[]>([])

    return(
        <div>
            <h1>ToDos</h1>
            <input type="text" />
            <div>
                
                
            </div>
        </div>
    )
}

export default Todo