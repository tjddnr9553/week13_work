import React, { Component } from "react";
import Home from "./pages/Home";
import Join from "./pages/member/Join";
import MemberDetail from "./pages/member/MemberDetail";
import BoardList from "./pages/board/BoardList"
import BoardAdd from "./pages/board/BoardAdd"
import BoardEdit from "./pages/board/BoardEdit"
import { Route, Routes } from "react-router-dom";


class Routers extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/member/join" element={<Join />} />
                <Route path="/member/detail" element={<MemberDetail />} />
                <Route path="/board/list" element={<BoardList />} />
                <Route path="/board/add" element={<BoardAdd />} />
                <Route path="/board/edit/:id" element={<BoardEdit />} />
            </Routes>
        )
    }
}

export default Routers;