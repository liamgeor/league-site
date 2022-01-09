const championsReducer = (state, action) =>{
    switch(action.type){

        case 'GET_CHAMPIONS':
            return{
                ...state,
                loading: false,
                champions: action.payload,
            }
        default:
            return state;
    }
}

export default championsReducer