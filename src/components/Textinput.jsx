import React,{useState} from 'react';


const Textinput = (props) =>{
  const [inputData ,setInputData] = useState("");
  const changeHandle=(e)=>{
     const newData = e.target.value;
     setInputData(newData);
    if(props.onChange){
      props.onChange(inputData);
    }
  }
  
    return(
        <>
          <input type="text" name={props.name} state={inputData} value={props.value} placeholder={props.placeholder} onChange={changeHandle}/>
          
        </>
    )
}
export default Textinput;