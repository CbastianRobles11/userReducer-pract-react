import React, { useReducer } from 'react'
import productReducer, { initialProductState } from './reducers/productReducer'
import types from './types'

function ProducerApp() {

    const [productState, dispatch] = useReducer(productReducer, initialProductState)

    //extraer lo que necesitamos del productState
    const {products,cart,activeProduct}= productState
    return (
        <div>
            <h2>Producer</h2>
            <ul>
               {products.map((p)=>{
                    return <li key={p.id}>
                    {p.title} 
                    <button onClick={()=>dispatch({
                        type:types.productShow,
                        payload:p
                    })}>
                        show
                    </button>
                    <button onClick={()=>dispatch({
                        type:types.productAddToCart,
                        payload: p
                    })} >
                        add to cart
                    </button>
                </li>
               })}
            </ul>
            <h2>Cart</h2>
            <ul>
               {cart.map(p => (
                    <li key={p.id}>
                        {p.title} - - quantity: {p.quantity}
                        <button onClick={()=> dispatch({
                            type: types.productRemoveOneFromCart,
                            payload:p.id
                        })} >
                            remove one
                        </button>
                        <button onClick={()=> dispatch({
                            type: types.productRemoveFromCart,
                            payload:p.id
                        })} >
                            remove to cart
                        </button>
                    </li>
               ))}
            </ul>
            <h2>Preview </h2>
            <p>{activeProduct.title}</p>
        </div>
    )
}

export default ProducerApp
