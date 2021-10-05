import React,{useReducer} from 'react'


// /state es el estdo inicial del use reducer
//el action es lo que deuelve el dispatch
const reducer=(state,action )=>{
    if(action.type==='increment'){
        return state+1
    }

    if(action.type ==='decrement')
        return state-1

    if(action.type==='reset')
        return 0;
    
    return state

}

export default function CounterApp() {

    //reducer es una funcion , es el initil state
    const [counter, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <h2>Numeros de clicks: {counter} </h2>
            <button onClick={()=> dispatch({type:'increment'})} >
                increment
            </button>

            <button  onClick={()=> dispatch({type:'decrement'})}> 
                decrement
            </button>
            <button onClick={()=> dispatch({type:'reset'})}>
                reset
            </button>

        </div>
    )
}
