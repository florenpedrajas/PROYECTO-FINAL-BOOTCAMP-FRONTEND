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

export const getUsersParkings = (user) => async (dispatch) => {
    dispatch({ type: "gettingParkings" });
    try {
        const ids = user;
        const parkings = [];
        try {
            for (let i = 0; i < ids.length; i++) {
                    if(ids[i] !== null){
                        const parking = await API.get("parkings/" + ids[i]);
                        console.log(parking)
                        parkings.push(parking.data);
                    }
            }
        } catch (error) {
            dispatch({ type: "error", payload: error.message });
        }
        console.log(parkings)
        dispatch({ type: "getParkings", payload: parkings });
    } catch (error) {
        dispatch({ type: "error", payload: error.message });
    }
};

export const parkingEdit = (user, id) => async (dispatch) => {
    dispatch({ type: "editingParking" });
    try {
        const mod = {
            users: user.toString()
        };
        console.log(mod)
        await API.put("/parkings/edit/" + id, mod);
        dispatch({ type: "parkingEdited"});
    } catch (error) {
        dispatch({ type: "errorEditingParking", payload: error.message });
    }
    };

export const filterParkings = (event, parkings) => async(dispatch) =>{
    dispatch({type: 'gettingParking'})
    try {
        let garage = parkings
        let inputValue =  event.target.value.toLowerCase()
        let filterGarajes = garage.filter((parking) => {
            const matchName = parking.adress.toLowerCase().includes(inputValue)
            console.log(matchName)
            return matchName
        }

        )
        console.log(filterGarajes)
        dispatch({type:'getParking', payload: filterGarajes})
    } catch (error) {
        dispatch({type: 'error', payload: error.message});
    }
}