const INITIAL_STATE = {
    parkings: [],
    parking:{},
    isLoading: false,
    error: false
}

const parkingsReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case "gettingParkings":
            return {...state, isLoading:true};
        case "getParkings":
            return {...state, isLoading:false, parkings: action.payload};
        case "error":
            return {...state, isLoading:false, parkings: [], error: action.payload};
        case "gettingParking":
            return {...state, isLoading:true};
        case "getParking":
            return {...state, isLoading:false, parking: action.payload};
        case "errorParking":
            return {...state, isLoading:false, parking: {}, error: action.payload};


        default:
            return state;
    }
}

export default parkingsReducer;