import React,{useState} from "react";



const StateWithObject=()=>{


let[coins,setCoins]=useState({gold:0,silver:0,bronze:0})


function increaseGold(){

        // setCoins({gold:coins.gold+1,silver:coins.silver,bronze:coins.bronze})
        setCoins({...coins,gold:coins.gold+1})
        

}


    return(



        <div>
            <h1>Gold={coins.gold},Silver={coins.silver},Bronze={coins.bronze}</h1>
            <button onClick={increaseGold}>increase gold</button>
            <button onClick={()=>setCoins({...coins,silver:coins.silver+1})}>increase silver</button>
            <button onClick={()=>setCoins({...coins, bronze:coins.bronze+1})}>increase bronze</button>
        </div>
    )
}

export default StateWithObject;