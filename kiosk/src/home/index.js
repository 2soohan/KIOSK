import React, { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";


const Home = ()=>{
    const navi = useNavigate()
    
    useEffect(()=>{

        fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => console.log(data));

        
 
    },[])
    
  
    return(
        <>
            <div>test</div>
            <Button onClick={()=>navi('/Room')}>룸</Button>
        </>

    )

}

export default Home