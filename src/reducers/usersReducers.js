const usersInitialState = []

const usersReducers = (state = usersInitialState,action)=>{

    switch(action.type){

        default:{
            return [...state]
        }
    }
}
export default usersReducers