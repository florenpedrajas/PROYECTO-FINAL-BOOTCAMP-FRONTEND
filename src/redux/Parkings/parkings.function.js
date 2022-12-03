import { API } from "../../Shared/Services/api";

export const getParkings = () => async(dispatch) =>{
    dispatch({type: 'gettingParkings'})
    try {
        const result = await API.get("/parkings");
        dispatch({type:'getParkings', payload: result.data})
    } catch (error) {
        dispatch({type: 'error', payload: error.message});
    }
}
export const filterParkings = (name, parkings) => async(dispatch) =>{
    dispatch({type: 'gettingParking'})
    try {
        const filterGarajes = parkings.filter((parking) => parking.name === name)
        dispatch({type:'getParking', payload: filterGarajes[0]})
    } catch (error) {
        dispatch({type: 'errorParking', payload: error.message});
    }
}