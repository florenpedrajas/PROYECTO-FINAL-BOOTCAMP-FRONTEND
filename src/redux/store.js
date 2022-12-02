import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import garajeReducer from "../redux/garaje/garage.reducer";


const rootReducer = combineReducers({
    //creamos un reducer para char y planet
    garaje: garajeReducer,
    
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;