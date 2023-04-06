import React, { useEffect, useState } from "react";
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { json, useHistory } from "react-router-dom";
import roomList from '../common/json/RoomList.json'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

//#region 탭 컴포넌트
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box p={2}>
                <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
const TabStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: 'rgb(239, 239, 239)',
        width: '100%',
    },
});
//#endregion 탭 컴포넌트

const Room = ()=>{
    const [value, setValue] = useState(0)
    const [room, setRoom] = useState(null)
    
    //#region json(룸 정보) 가져오기
    const jsonLoad = ()=>{
        if(roomList){
            let arrayRoom = new Array(roomList.room)
            let newRoom = []
            arrayRoom[0].map((item)=>{
                newRoom.push(item)
            })
            if(newRoom.length > 0){
                setRoom(newRoom)
            }
        }
    }
    useEffect(()=>{
        jsonLoad()
    },[])
    //#endregion json(좌석 정보) 가져오기

    //#region 상단 네비바 change 이벤트
    const handleChange = (e, val)=>{
        setValue(val)
    }
    //#endregion 상단 네비바 change 이벤트

    //#region 상단 네비바 설정
    const NavBar = () => {
        return (
            <>
                <Paper>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    >
                        {room&&(
                            room.map((item,index)=>{
                                return (
                                    <Tab label={`${item.roomName}`} {...a11yProps(index)} fullWidth/>
                                )
                            })
                        )}
                    </Tabs>
                </Paper>
            </>
        )
    }
    //#endregion 상단 네비바 설정

    //#region 네비바 값에 일치하는 패널
    const LocPanel = (props) => {
        return (
        <div>
            {room&&(
                room.map((item,index)=>{
                    return (
                        <TabPanel value={value} index={index}>
                            <div>test{item.roomName}</div>
                        </TabPanel>
                    )
                })
            )}
        </div>
        )
    }
    //#endregion 네비바 값에 일치하는 패널
 
    return(
        <>
            <NavBar/>
            <LocPanel/>
        </>
    )

}

export default Room