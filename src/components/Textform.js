import React , {useState} from 'react'



export default function Textform(props) {
    const uppercaseClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const lowercaseClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const clearClick = () =>{
        
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared", "success")
    }
    const Extraspaces = () =>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been cleared", "success")

    }
    const handleOnchange = (event) =>{
       
        setText(event.target.value);
    }
    const[text,setText]=useState('')
  return (
    <>
<div className="container" style={{color : props.mode ==='dark'?'white':'#042743'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
  
    <textarea className="form-control" id="mybox" rows="8"onChange={handleOnchange} value={text} style={{backgroundColor : props.mode ==='dark'?'#212529':'white',color : props.mode ==='dark'?'white':'#042743'}}></textarea>
    </div>
    <button className="btn btn-primary" onClick={uppercaseClick}>Convert To uppercase</button>
    <button className="btn btn-primary mx-2" onClick={lowercaseClick}>Convert To lowercase</button>
    <button className="btn btn-primary mx-2" onClick={Extraspaces}>Clear Extra Spaces</button>
    <button className="btn btn-primary" onClick={clearClick}>Clear text</button>
</div>
<div className="container my-3" style={{color : props.mode ==='dark'?'white':'#042743'}}>
    <h3>Your Text summary</h3>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p><h4> Estimated Read time : </h4>{0.008 * text.split(" ").length} </p>
    <p><h4> Preview : </h4>{text.length >0 ? text:"Enter something in the text box to preview it here"} </p>
</div>
</>
  )
}
