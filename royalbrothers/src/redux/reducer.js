import { GET_DATA } from "./actionTypes";




const initState={
    bikes:[]
}

export const bikeReducer = (state=initState,{type,payload})=>{
switch(type){
    case(GET_DATA):{
        return{
            ...state,
            bikes:[...payload]
        }
    }
    default:{
        return state
    }
}
}
