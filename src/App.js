import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import React from "react";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((route, index) => {
                            return (
                                <Route key={index} path={route.path} exact={route.exact}
                                       component={route.component}/>
                                )
                        })
                    }
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
