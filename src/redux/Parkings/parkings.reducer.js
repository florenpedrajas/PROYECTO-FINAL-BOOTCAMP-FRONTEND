const INITIAL_STATE = {
    parkings: [],
    parking: [],
    isLoading: false,
    error: false
}

const parkingsReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case "gettingParkings":
            return {...state, isLoading:true, parkings:[]};
        case "getParkings":
            return {...state, isLoading:false, parkings: action.payload, parking: ['true']};
        case "error":
            return {...state, isLoading:false, parkings:[], parking:[], error: action.payload};
        case "gettingParking":
            return {...state, isLoading:true, parking:[]};
        case "getParking": 
            return {...state, isLoading:false, parking: action.payload};

        case "editingParking":
            return {...state, isLoading: true}
        case "parkingEdited":
            return {...state, isLoading: false}
        case "errorEditingParking":
            return {...state, isLoading: false, error: action.payload}


        default:
            return state;
    }
}

export default parkingsReducer;