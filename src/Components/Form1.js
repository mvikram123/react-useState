import React,{useState} from "react";



const Form1=()=>{
let[name,setName]=useState("");

    function updateName(event){

        // console.log(event.target.value);
        setName(event.target.value);


    }



    return(

        <div>
            <input type="text" placeholder="Enter your name" onChange={updateName}></input>
            {/* <button onClick={updateName} */}
            <p>{name}</p>
        </div>
    )
}
export default Form1;