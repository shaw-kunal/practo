import { green } from "@mui/material/colors"

const Reducer =(state,action)=>{

    switch(action.type)
    {
        case 'SET_CITY':
            return {
                ...state,
                city:action.payload === "" ? null : action.payload
            }
         case 'SET_SPECIALIST':
            return {
                ...state,
                specialist:action.payload===""?null:action.payload
            }
        case 'SET_SORT':
            return {
                ...state,
                sort:action.payload
            }

        case 'SET_FEES':
            return {
                ...state,
                fees:action.payload
            }

            case 'SET_GENDER':
                return{
                    ...state,
                gender:action.payload
                }

            default:
                return state
    }

}

export default Reducer