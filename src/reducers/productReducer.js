import types from "../types";

const initialProductState = {
    products: [
        { id: 1, title: "Products 1", quantity: 1 },
        { id: 2, title: "Products 2", quantity: 1 },
        { id: 3, title: "Products 3", quantity: 1 },
        { id: 4, title: "Products 4", quantity: 1 },

    ],
    cart: [
        { id: 1, title: 'Products 1', quantity: 1 }
    ],
    activeProduct: { id: 2, title: 'Products 2', quantity: 1 }
}


const productReducer = (state, action) => {
    switch (action.type) {
        case types.productShow:
            return {
                ...state,
                activeProduct: action.payload
            }

        case types.productAddToCart:
            const newProduct = action.payload;
            const cartContainProduct = state.cart.find(p => p.id === newProduct.id)

            return cartContainProduct
                ? {
                    ...state,
                    cart: state.cart.map(p =>
                        p.id === newProduct.id
                            ? { ...p, quantity: p.quantity + 1 }
                            : p
                    )

                }

                : {
                    ...state,
                    cart: [
                        ...state.cart,
                        { ...action.payload, quantity: 1 }
                    ]
                }

        case types.productRemoveFromCart:
            return {
                ...state,
                //remover el elemento del id del carrito
                cart: state.cart.filter(p => p.id !== action.payload)
            }

        case types.productRemoveFromCart:

            return {
                ...state,
                //remover el elemento del id del carrito
                cart: state.cart.filter(p => p.id !== action.payload)
            }




            break;



        case types.productRemoveOneFromCart: {

            const productDelete = state.cart.find(p => p.id === action.payload)
            return productDelete.quantity > 1
            ?{
                ...state,
                cart: state.cart.map(p => p.id === action.payload
                    ? { ...p, quantity: p.quantity - 1 }
                    : p)

            }
            :{
                ...state,
                //remover el elemento del id del carrito
                cart: state.cart.filter(p => p.id !== action.payload)
            }

        }

        default:
            return state
            break;
    }
}

export { initialProductState }
export default productReducer