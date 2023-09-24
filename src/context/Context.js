import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer";

const INITIAL_STATE = {
    city: null,
    specialist: null,
    sort:0,
    fees:0,
    gender:0


}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("search",JSON.stringify(state))
    },[state])
    console.log("state")
    console.log(state)
    return (
        <Context.Provider value={{
            city: state.city,
            specialist: state.specialist,
            sort:state.sort,
            fees:state.fees,
            gender:state.gender,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )


}