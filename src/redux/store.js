import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import garajeReducer from "../redux/garaje/garage.reducer";
import authReducer from './auth/auth.reducer';
import parkingsReducer from './Parkings/parkings.reducer';
import { newBookingReducer } from './newBooking/newBooking.reducer';

const rootReducer = combineReducers({
    garaje: garajeReducer,
    parkings: parkingsReducer,
    auth: authReducer,
    booking: newBookingReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;