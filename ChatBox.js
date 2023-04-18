import React,{useEffect,useState} from "react";
import { Socket } from "io";

function ChatBox() {
    const [inputField,setInputField] = useState({
        name : '',
        room : '',
        message : ''
    });
    const inputHandler = (e) =>{
        setInputField({
            ...inputField,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <h1>ChatBox</h1>
            <input type="text" placeholder="Enter Name" name="name" onChange={inputHandler} />
            <input type="text" placeholder="Enter Room" name="room" onChange={inputHandler} />
        </div>
    )
}

export default ChatBox;