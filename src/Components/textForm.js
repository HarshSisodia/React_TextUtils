import React,{useState}from 'react'
   
export default function TextForm(props) {
const handleUpClick =() =>{
    // console.log("Upper was Clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
}
const handleOnChange =(event) =>{
    // console.log("On change");
    setText(event.target.value);
}
const handleLoCase =()=>{
    let newText=text.toLowerCase();
   setText(newText);
}

const handleClear =() =>{
    
    setText("");
}

     const[text,setText]=useState("");
     //text="new text";//wrong way to change the state
     //setText=("new Text");//correct way to change the state
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="15"></textarea>
       </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
         
            <button className="btn btn-primary" onClick={handleLoCase} style={{ marginLeft: '10px' }}>Convert to lowerCase</button>

       <button className="btn btn-primary" onClick={handleClear} style={{ marginLeft: '10px' }}>clear Text</button>
        
    </div>
  )
}
