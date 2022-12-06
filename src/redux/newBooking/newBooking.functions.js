
import { API } from "../../Shared/Services/api";
import { userEdit } from "../auth/auth.funtion";
import { parkingEdit2 } from "../Parkings/parkings.function";

export const postNewBooking = (datos,navigate) => async (dispatch) => {
    dispatch({ type: "postingBooking" });
    try {
      console.log(datos);
      const res = await API.post("bookings/create", datos);
      const user = localStorage.getItem('id')
      dispatch({ type: "postBooking" });
      dispatch(userEdit(res.data._id))
      
      dispatch(parkingEdit2(res.data_id, datos._id))
      navigate("/user/userProfile");
    } catch (error) {
      dispatch({ type: "postingError", payload: error.message });
    }
  };

