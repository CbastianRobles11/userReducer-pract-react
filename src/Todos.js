import React, { useReducer,useState } from 'react'

const types={
    add:'add',
    update:'update',
    delete:'delete'
}

const initialTodos=[
    {id:1, title:'title1'},
    {id:2, title:'title2'},
    {id:3, title:'title3'},
    {id:4, title:'title4'},
]

const reducer=(state,action)=>{

    switch (action.type) {
        case types.delete:
            //todo elemento que no tenga el mismo id del seleccionado
            return state.filter(todo=> todo.id !== action.payload)
            
            break;
    
        case types.add:
            //copia dl stqate y agregar el nuevo elemento
            //action.payload recibe por la funcion lo que hay en el campo de texto
            return [...state,action.payload]
            
            break;
        
        case types.update:
            const editTodo= action.payload
            return state.map(todo=>todo.id === editTodo.id ? editTodo: todo )
        
    
        default:
            return state
            break;
    }
}

export default function Todos() {
    
    const [todos, dispatch] = useReducer(reducer, initialTodos)
    const [text, setText] = useState("")

    //funcion para el form agregar
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const newTodo={id: Date.now(),title:text}
        
        //vamos a disparar un action
        dispatch({

            type: types.add,
            //tendra el texto de la nueva tqaarea
            // payload:text
            payload:newTodo
        })
    }

    return (
        <div>
            <h1>Todos app</h1>

            <ul>
                {todos.map(todo=>(
                  <li key={todo.id}>
                      { todo.title}
                        <button onClick={()=> dispatch({
                            type:types.delete,
                            //se manda cualquier dato necesario en el atributo payload
                            payload:todo.id
                        })}>
                            Delete
                        </button>

                        <button onClick={()=> console.log( {...todo,title:text})}>
                            Update
                        </button>
                  </li>
                ))}  
            </ul>
            <form onSubmit={handleSubmit}>

            <input 
                placeholder="Todo"
                value={text}
                onChange={
                    e=>{ 
                        e.preventDefault()
                        setText(e.target.value)
                    }

                }
            />

            </form>
           


        </div>
    )
}
