
import React from "react";
import Login from "./Login";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div className="contanier-fluid">
                <Switch>
                    <Route path="/" exact={true} Component={Login}>          </Route>
                </Switch>



            </div>
        </HashRouter>




    );
}
export default App;