import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/index"
const router = ()=>{
    useEffect(()=>{
        console.log("test")
    },[])
    return(
        <BrowserRouter>
            <Routes>
                <Route exact element={<Home/>} path="/" />
            </Routes>
        </BrowserRouter>
    )

}

export default router