import API from "../utils/API";

class UserService {
    login(phone, password) {
        return API.post("v1/auth/singing", {
            phone: phone,
            password: password
        })
    }
}

export default new UserService();