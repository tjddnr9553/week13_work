import { Component } from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";


class Router extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        )
    }
}

export default Router;