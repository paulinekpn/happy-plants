import { createContext, useReducer } from 'react'

export const PlantsContext = createContext();

export const plantsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PLANTS':
            return {
                plants: action.payload
            }
        case 'NEW_PLANT':
            return {
                workouts: [action.payload, ...state.plants] //[adds new plants, also all existing plants]
        }
        default:
            return state
    }
}

export const PlantsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(plantsReducer, {
        plants: null
    })
    return (
        <PlantsContext.Provider value={{...state, dispatch}}>
         {children}
        </PlantsContext.Provider>
    )
}