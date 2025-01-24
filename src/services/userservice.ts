import type USer from "@/types/User";
import Axios from "./dataservice";

export default {
  registerUser(data: USer) {
    return Axios.post('/register', data)
      .then((res) => {
        console.log(res);
        return res
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err)
      })
  },
}

