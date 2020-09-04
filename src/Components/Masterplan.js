import React, { Component } from 'react';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.css'
import './images.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Button} from '@material-ui/core';
var count = 0;
export default class MasterImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        
        this.state = {
            file: [null]

        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
        
    }
    getFileBlob = (url, cd) => {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.addEventListener('load', function() {
        cd(xhr.response);
      });
      xhr.send();
    }
            uploadToStorage = (text, length) =>{
        console.log("inside");
     this.getFileBlob(text, blob =>{
        var uploadTask = firebase.storage().ref().child(text).put(blob);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {


}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    
    firebase.database().ref('Minisite/Users/User2/plan').push({
        count:downloadURL
    })
    console.log('File available at', downloadURL);
    count++;
    if(count == length){
      console.log(count);
      document.getElementById("sample").style.display="none";
      window.location.href="/Amenities"
    }
    
  });
});
     
    })
}
  

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        console.log(this.fileObj.length);
        for( let j=this.fileObj.length-1;j < this.fileObj.length;j++){
                  for (let i = 0; i < this.fileObj[j].length; i++) {
                console.log(this.fileObj[j][i]);
            this.fileArray.push(URL.createObjectURL(this.fileObj[j][i]))
             
        }  
        }


        this.setState({ file: this.fileArray })
    }


    uploadFiles(e) {
        e.preventDefault()

        console.log(this.state.file)

        for(let i=0;i<this.state.file.length;i++){
            (async () => {
                  const text = await (new Response(this.state.file[i])).text();
                   
                    this.uploadToStorage(text,this.state.file.length);
                   


})();
                 
        }


        
    }

    render() {
        return (
         
             
          <Card className="cards" variant="outlined">
          
          <CardContent>
          <p style={{fontWeight:'700'}}>Upload Plan & Design Images</p>
            <form noValidate autoComplete="off">
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} id={url} alt="..." />
                    ))}
                </div>

                <div className="form-group">
                    <input type="file"  className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                {/* <button type="button" className="btn btn-primary" >Upload <CloudUploadIcon></CloudUploadIcon></button> */}
                </form>
               
                <div className="loader" id="sample" style={{ display: "none",

}}>
</div>
            <Button variant="contained" className="nextbtn" type="submit" onClick={this.uploadFiles}>Save and Continue<ArrowForwardIcon></ArrowForwardIcon></Button>
                
            </CardContent> 
            </Card>

        )
    }
}