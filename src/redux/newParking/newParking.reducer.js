const INITIAL_STATE = {
    isLoading: false,
    error: false
}
export const newParkingReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "postingParking":
            return {...state, isLoading: true, error: false };
        case "postParking": 
        return{...state, isLoading: false, error: false};
        case "postingError":
            return{...state, isLoading: false, error: action.payload }
        default:
            return state;
    }
}