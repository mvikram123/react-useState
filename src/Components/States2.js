import React, { useState } from "react";
import {FaPlus} from "react-icons/fa";
import {FaMinus} from "react-icons/fa";
import {TfiReload} from "react-icons/tfi";


const States2=()=>{


let[count,setCount]=useState(0)


// function increase(){
//     setCount(count+1)
// }


//normal function
// function decrease(){
//     if(count>0)
//     setCount(count-1)
// }

    return(


        <div>
            <h1>hey value of count={count}</h1>
            <button onClick={()=>setCount(count+1)}><FaPlus></FaPlus></button>
            <button onClick={()=>count>0?setCount(count-1):""}><FaMinus /></button>
            <button onClick={()=>setCount(0)}><TfiReload /></button>
        </div>
    )
}
export default States2;