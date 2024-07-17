import React from "react";
import { Appcontext } from "./Parent";
import { useContext } from "react";

export  const Getname =()=>{
    const {setName}=useContext(Appcontext)
    return(
        <form >
            <input type="text"
            placeholder="Enter your name" 
            onChange={(e)=>setName(e.target.value)}

            />
        </form>
    )

}