import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");

  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success");

  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared","success");
  }
  const handleCopyClick = ()=>{
    let Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!","success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
  }

  function handleOnChange(event) {
    setText(event.target.value);
  }


  
  const [text, setText] = useState('');  
  // setText("new text"); // correct way to change the state
  
  return (
      <>
      
        <div className="container" style={{color: props.mode==='dark'?'white':'#081f42'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#112646':'white', color: props.mode==='dark'?'white':'#112646'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
      <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#081f42'}}>
        <h1>Your text summary </h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
      </div>
      
      </>
  )
}