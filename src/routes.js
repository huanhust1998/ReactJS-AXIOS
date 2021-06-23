import Login from "./component/login/Login";
import Homepage from "./component/home/Homepage";

export const routes = [
    {path: "/", exact: true, component: Login},
    {path: "/home", exact: true, component: Homepage}
]