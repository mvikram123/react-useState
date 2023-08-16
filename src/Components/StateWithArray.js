import React, { useState } from "react";




const StateWithArray=()=>{

    const[favourite,setFavourite]=useState(["mango","apple","banana"])
    const[newFruit,setNewFruit]=useState("");

    console.log(favourite);
    console.log(newFruit);


    function addFruit(e){

        setNewFruit(e.target.value)
       
    }


    function addToFavourite(){

        setFavourite([...favourite,newFruit])
         setNewFruit("");
    }

    return(

        <div>
            <input type="text" placeholder="Enter Your favourite" onChange={addFruit} value={newFruit}></input>
            <button onClick={addToFavourite}>Add</button>
        </div>
    )
}

export default StateWithArray;