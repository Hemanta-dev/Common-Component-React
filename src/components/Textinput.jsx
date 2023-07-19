import React from 'react';

const Textinput = (props) =>{
    return(
        <>
          <input type="text" name={props.name} placeholder={props.placeholder} onChange={(e)=> console.log("value new !")}/>
        
        </>
    )
}
export default Textinput;