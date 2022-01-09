import {createContext, useReducer} from "react";
import championsReducer from './ChampionsReducer'

const ChampionsContext = createContext();

export const ChampionsProvider = ({children}) =>{
    const initialState = {
        loading: true,
        champions: [],
    }

    const [state, dispatch] = useReducer(championsReducer, initialState)


    return <ChampionsContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </ChampionsContext.Provider>
    
}

export default ChampionsContext