import { useEffect, useReducer } from 'react';
import Reducer from '../RouterFiles/Reducer';

const useCart = () => {
    const INITIAL_STATE = {
        frontEnd: [],
        backEnd: [],
        cart: []
    }
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    useEffect(() => {
        fetch('https://jsonblob.com/api/09a9488b-9cee-11ea-9a4c-d9fb2263c424').then(response => response.json()).then(json => {
            const { frontend } = json
            const { backend } = json
            dispatch({ type: 'API_SUCCESS', payload: { frontEnd: [...frontend], backEnd: [...backend] } })
        })
    }, []);
    const addFrontEndItem = (index) => {
        dispatch({ type: 'ADD_FRONTEND_ITEM', payload: { index } })
    }
    const addBackEndItem = (index) => {
        dispatch({ type: 'ADD_BACKEND_ITEM', payload: { index } })
    }
    const deleteItem = (index) => {
        dispatch({ type: 'DELETE_ITEMS', payload: { index } })
    }
    return {
        state,
        addFrontEndItem,
        addBackEndItem,
        deleteItem
    }
}
export default useCart