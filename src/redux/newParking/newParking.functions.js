import { useNavigate } from "react-router-dom";
import { API2 } from "../../Shared/Services/api";

export const postNewParking = (datos,navigate) => async (dispatch) => {
    dispatch({ type: "postingParking" });
    try {
      const res = await API2.post("parkings/create", datos);
      dispatch({ type: "postParking" });
      navigate("/")
    } catch (error) {
      dispatch({ type: "postingError", payload: error.message });
    }
  };