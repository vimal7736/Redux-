import apiClient from "./helpers/apiClient";



class Userservice {
    getAllUsers=()=>apiClient().get("users");
}
export default new Userservice();
