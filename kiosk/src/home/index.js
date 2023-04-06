import React from "react";
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const Home = ()=>{
   const navi = useNavigate()
    return(
        <>
            <div>test</div>
            <Button onClick={()=>navi('/Room')}>룸</Button>
        </>

    )

}

export default Home