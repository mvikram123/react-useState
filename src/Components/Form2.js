import React,{useState} from "react";





const Form2=()=>{
    let[name,setName]=useState("");
    let[btnClick,setBtnClick]=useState(false);


// normal function we can write instead of const addName=(e)=>{e.target.value}
    function addName(e){

        setName(e.target.value);
        // setBtnClick(false)
    }

    function reset(){

        setName("");
        setBtnClick(false);
    }


    return(

        <div>
            <input type="text" placeholder="Enter your name" onChange={addName} value={name}></input>
            <button  onClick={()=>setBtnClick(true)}>submit</button>
            {btnClick==true && name!="" ? <p>{ name.toUpperCase()}</p>:""}
            <button onClick={reset}>Reset</button>


        </div>
    )
}

export default Form2;