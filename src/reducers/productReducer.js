const initialStateValue=[]

const productsReducers = (state=initialStateValue,action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':{
            return [action.payload,...state]
        }
        case 'LIST_ALL_PRODUCTS':{
            return action.payload
        } 
        case 'EDIT_PRODUCT':{
            return state.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...ele,...action.payload}
                }else{
                    return {...ele}
                }
            })
        }

        case 'DELETE_PRODUCT':{
            return state.filter((ele)=>{
                return ele._id !== action.payload._id
            })
        }   
      
        
        default:
            return [...state]
    }   
}

export default productsReducers