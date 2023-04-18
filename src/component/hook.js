import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import SockJS from "sockjs-client";
import * as Stomp from 'stompjs';

function HookComponent(props) {
    const url = 'http://localhost:8090'
    let ws;
    let stompClient;
    const [name, setName] = useState('EIS');
    const [member, setMember] = useState(17);
    const [room, setRoom] = useState([]);

    useEffect(() => {
        console.log("useEffect")
       
            connect()
        
    })

    const connect = () => {
        console.log("Initialize WebSocket Connection");
        ws = new SockJS(`${url}/ws`);
        stompClient = Stomp.over(ws);
        stompClient.connect({}, function (frame) {
            getRoom()
            stompClient.subscribe('/property/list', function (sdkEvent) {
                console.log(sdkEvent)
                setRoom(sdkEvent.body);
            });
            //_this.stompClient.reconnect_delay = 2000;
        }, errorCallBack);
    };

    const errorCallBack = (error) => {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            connect();
        }, 5000);
    }

    const getRoom = () => {
        return axios.get(`${url}/api/property`)
    }

    const changeInput = (e, type) => {
        if (type === 'name') {
            setName(e.target.value)
        } else {
            setMember(e.target.value)
        }
        
    }

    const memoDiv = useMemo(() =>{
        console.log("render xin chao")
        return <h3>Xin chào {name}</h3>
    } , [name])


    const setDefault = useCallback(() => {
        console.log(name)
        setName("EIS")
    }, [name])


    return <div>
            <h3>Demo react hook</h3>
            <p>Name</p>
            <input value={name} onChange={e => changeInput(e, "name")} />
            {memoDiv}
            <br/>
            <p>Member</p>
            <input value={member} onChange={e => changeInput(e, "member")} />
            <br/>
            <p>Room</p>
            {room}
            <br/>
            <ChildComponent setDefault={setDefault}/>
            <p><a href="/">React life cycle</a></p>
        </div>
    }


    const ChildComponent = 
    //React.memo(
        (props) => {
        console.log("render child component")
        return <button onClick={props.setDefault}>Reset</button>
    }
    //)



export default HookComponent;