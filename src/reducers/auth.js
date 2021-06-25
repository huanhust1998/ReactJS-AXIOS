import {LOGIN} from "../actions/type";
import UserService from "../service/UserService";

const initialState = {
    username: null,
    password: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            UserService.login(action.payload.username, action.payload.password).then(response => {
                console.log(response);
            })
            return null;
        }
        default:
            return null
    }
}

export default authReducer;