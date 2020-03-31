import React from "react";
import users from "./ContactList.js";
import Contact from "./Contact.js";

const DisplayContactlist = () =>{
    return users.map(user=><Contact avatar={user.avatar} name={user.name} online={user.online}/>)
}

export default DisplayContactlist;
