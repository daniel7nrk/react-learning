import { useEffect, useState } from 'react'
import trash from '../assets/trashbin.svg'
import './todo.css'

interface data{
    key:number
    text:string
    check:boolean
    status:boolean
}

function Todo() {
    const[task,setTask] = useState<string>('')
    // const [text, setText] = useState<string>('')
    // const [lister, setLister] = useState<string[]>([])
    const [list, setList] = useState<data[]>([
        {
            key:1,
            text:"daniel",
            check:false,
            status:true
        },
        {
            key:2,
            text:"matt",
            check:false,
            status:true
        },
        {
            key:3,
            text:"adal",
            check:false,
            status:true
        },
        {
            key:4,
            text:"illumine",
            check:false,
            status:true
        },

    ])

    // const handleAdder = () => {
    //     if (text.trim() === '') return
    //     setLister([...lister, text])   
    //     setText('')
    // }

    const delethadle = (data: number) => {
    setList((prev) =>
        prev.map((item) =>item.key === data ? { ...item, status: false } : item)
    );
    };

    const handleAdd = () => {
        if (task.trim() === '') return
        let data = {
            key:list.length+1,
            text:task,
            check:false,
            status:true
        }
        setList([...list, data ])   
        setTask('')
    }

    const handleToggle = (key: number) => {
    setList(
        list.map((item) =>
            item.key === key? { ...item, check: !item.check }  : item                              // leave the others alone
        )
    )
}


    return (
        <div className='thediv'>
            <div className='body'>

            <h1>ToDos</h1>

            <div className='input'>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Type something..."
                />
                <button onClick={handleAdd}>+</button>
            </div>
            {list.map((task) =>{
                if(task.status){
                    return(
                    <div className='list'>
                        <input
                            type="checkbox"
                            checked={task.check}
                            onChange={() => handleToggle(task.key)}
                        />
                        <span className={task.check ? 'done' : ''} >{task.text}</span><img src={trash} onClick={()=> delethadle(task.key)} alt="" />
                    </div>
                    )
                }
            } )}
            
            
        </div>
            </div>
    )
}

export default Todo



