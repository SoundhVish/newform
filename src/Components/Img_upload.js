import React from "react";
import './Img_upload.css';
class Img_upload extends React.Component {
  componentDidMount()
  {
    const script = document.createElement("script");
    script.src = "./js/dropzone.js";
    script.async = true;
    document.body.appendChild(script);
  } 
     
    render(){
        
         
      return (
  
        
           
            <div className="dropzone" id="projectlogo" style={{border: '2px dashed #0087F7',borderRadius: '5px',background: 'white',textAlign: 'center', flexDirection: 'column',display: 'flex',alignItems: 'center'}}>
            <a href="#" id="clearlogodropzone" className="btn input_button" style={{background:'white',color:'#ff4070',display:'none'}} onClick=" removelogodropzone();">Clear</a>
             <input type="text" id="logodropzonefile" required style={{display:'none'}}/>
          </div>
       
         
        
      );
    }
}

export default Img_upload;