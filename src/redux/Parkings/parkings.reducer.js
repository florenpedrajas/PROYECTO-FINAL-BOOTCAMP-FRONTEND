const INITIAL_STATE = {
    parkings: [],
    isLoading: false,
    error: false
}

const parkingsReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case "gettingParkings":
            return {...state, isLoading:true, parkings:[]};
        case "getParkings":
            return {...state, isLoading:false, parkings: action.payload};
        case "error":
            return {...state, isLoading:false, parkings: [], error: action.payload};


        default:
            return state;
    }
}

export default parkingsReducer;