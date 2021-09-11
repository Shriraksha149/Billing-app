const initialStateValue=[]

const customersReducers = (state=initialStateValue,action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':{
            return [action.payload,...state]
        }
        case 'LIST_ALL_CUSTOMERS':{
            return action.payload
        }    
        
        case 'EDIT_CUSTOMER':{
            return state.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...ele,...action.payload}
                }else{
                    return {...ele}
                }
            })
        }

        case 'DELETE_CUSTOMER':{
            return state.filter((ele)=>{
                return ele._id !== action.payload._id
            })
        }
        default:
            return [...state]
    }   
}

export default customersReducers