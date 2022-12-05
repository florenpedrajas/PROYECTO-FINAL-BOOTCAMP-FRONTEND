
import { API2 } from "../../Shared/Services/api";
import { userEdit } from "../auth/auth.funtion";
import { parkingEdit } from "../Parkings/parkings.function";

export const postNewParking = (datos,navigate) => async (dispatch) => {
    dispatch({ type: "postingParking" });
    try {
      const res = await API2.post("parkings/create", datos);
      const user = localStorage.getItem('id')
      dispatch({ type: "postParking" });
      dispatch(userEdit(res.data._id))
      dispatch(parkingEdit(user, res.data._id))
      /*navigate("/");*/
    } catch (error) {
      dispatch({ type: "postingError", payload: error.message });
    }
  };

