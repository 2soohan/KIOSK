import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/index"
import Room from "../room/index";
const router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact element={<Home/>} path="/" />
                <Route exact element={<Room/>} path="/Room" />
            </Routes>
        </BrowserRouter>
    )

}

export default router