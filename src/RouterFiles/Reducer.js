const Reducer = (state, action) => {
    const { type, payload } = action
    const { frontEnd, backEnd, cart } = state;
    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...payload
            }
        }
        case 'ADD_FRONTEND_ITEM': {
            const { index } = payload;
           
            frontEnd[index].incart = "true";
           
            return {
                ...state,
                cart: [...cart, frontEnd[index]]
            }
        }
        case 'ADD_BACKEND_ITEM': {
            const { index } = payload;
        backEnd[index].incart = "true";
            return {
                ...state,
                cart: [...cart, backEnd[index]]
            }
        }
        case 'DELETE_ITEMS': {
            const { index } = payload;
            cart.splice(index, 1)
            const Id=frontEnd[index].id;
          
            frontEnd[Id-1].incart="false";
           
            const Id1=backEnd[index].id;
            backEnd[Id1-1].incart="false";
            return {
                ...state,
                cart: [...cart],
                frontEnd:[...frontEnd],
                backEnd:[...backEnd]
            }
        }
        default: {
            return state
        }
    }
}
export default Reducer