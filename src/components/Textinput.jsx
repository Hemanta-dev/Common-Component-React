import React,{useState} from 'react';



const Textinput = (props) =>{
  const [inputData ,setInputData] = useState("");
  const [checkValidation,setCheckValidation] =useState(false);


  const changeHandle=(e)=>{
     const newData = e.target.value;
     setInputData(newData);
     setCheckValidation(false)
    if(props.onChange){
      props.onChange(newData);
    }
  }

  const handleBlur = () => {
    if (inputData === "") {
      setCheckValidation(true); 
    } else {
      setCheckValidation(false);
    }
  };
  
    return(
        <>
          <input type="text" name={props.name} value={props.value} placeholder={props.placeholder} onBlur={handleBlur} inputData={inputData} onChange={changeHandle}/>
          {checkValidation && inputData === "" && <p className='errorMessage'>***please enter your valid input***</p>}
         


        </>
    )
}
export default Textinput;