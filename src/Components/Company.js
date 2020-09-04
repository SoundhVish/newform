import React from 'react'
import firebase from './firebase';
import './Company.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import { FormLabel, TextField,Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Img_upload from './Img_upload';
function Company() {
  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#fffff',
        },
        '&:hover fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#34C7CC',
        },
      },
    },
  })(TextField);
  function uploadData(e){
    e.preventDefault()
    const website = document.getElementById("website").value;
    const phn_no = document.getElementById("phn_no").value;
    const email = document.getElementById("email").value;
    const utube= document.getElementById("utube").value;
    const insta= document.getElementById("insta").value;
    const fb= document.getElementById("fb").value;
    const In= document.getElementById("In").value;
    firebase.database().ref('Minisite/Users/User2').update({
      website: website,
      phn_no: phn_no,
      email : email,
      utube:utube,
      insta:insta,
      fb:fb,
      In:In    
    });
  // File or Blob named mountains.jpg
var file = document.getElementById("imaglogo").files[0];

// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = firebase.storage().ref().child('images/' + file.name).put(file, metadata);

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

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  // switch (error.code) {
  //   case 'storage/unauthorized':
  //     // User doesn't have permission to access the object
  //     break;

  //   case 'storage/canceled':
  //     // User canceled the upload
  //     break;

    

  //   case 'storage/unknown':
  //     // Unknown error occurred, inspect error.serverResponse
  //     break;
  // }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    firebase.database().ref('Minisite/Users/User2').update({
      logo:downloadURL
    })
    window.location.href="/Brochure"
  });
});
  // }
 
  }
    return (
        <div>
        <Card className="cards" variant="outlined">
      <CardContent>
        <form noValidate autoComplete="off">
        <p style={{fontWeight:'700',paddingBottom:'15px'}}>Fill in your company info below </p>
        <FormControl>
        <FormLabel className="labels" htmlFor="my-input">Website</FormLabel>
        <CssTextField      
      variant="outlined"
      className="username"
      name="username"
      type="url"
      id="website"
   />
      </FormControl>
      <FormControl>
    <FormLabel className="labels" htmlFor="my-input">Phone No.</FormLabel>
    <CssTextField      
    variant="outlined"
    className="username"
    name="username"
    type="tel"
    id="phn_no"
 />
  </FormControl>
      <FormControl>
      <FormLabel className="labels" htmlFor="my-input">Email</FormLabel>
      <CssTextField      
      variant="outlined"
      className="username"
      name="username"
      type="email"
      id="email"
   />
      </FormControl>
      <FormControl>
      <div className="dropzone" id="projectlogo" style={{border: '2px dashed #0087F7',borderRadius: '5px',background: 'white',textAlign: 'center', flexDirection: 'column',display: 'flex',alignItems: 'center'}}>
      <a href="#" id="clearlogodropzone" className="btn input_button" style={{background:'white',color:'#ff4070',display:'none'}} onClick=" removelogodropzone();">Clear</a>
       <input type="text" id="logodropzonefile" required style={{display:'none'}}/>
    </div>
      
      </FormControl>
      <p style={{fontWeight:'600',paddingBottom:'15px'}}>Social Media Handles</p>
    <FormControl>
    
       
    <FormLabel className="labels" htmlFor="my-input">Youtube</FormLabel>
    <CssTextField      
      variant="outlined"
      className="username"
      name="username"
      type="url"
      id="utube"
   />
  </FormControl>
  <FormControl>
    <FormLabel className="labels" htmlFor="my-input">Instagram</FormLabel>
    <CssTextField      
      variant="outlined"
      className="username"
      name="username"
      type="url"
      id="insta"
   />
  </FormControl>
  <FormControl>
  <FormLabel className="labels" htmlFor="my-input">Facebook</FormLabel>
  <CssTextField      
      variant="outlined"
      className="username"
      name="username"
      type="url"
      id="fb"
   />
</FormControl>
<FormControl>
<FormLabel className="labels" htmlFor="my-input">Linkedin</FormLabel>
<CssTextField      
      variant="outlined"
      className="username"
      name="username"
      type="url"
      id="In"
   />
</FormControl>
<Button variant="contained" className="nextbtn" type="submit"  onClick={uploadData}>Save an Continue<ArrowForwardIcon></ArrowForwardIcon></Button>
        </form>
        </CardContent>
        </Card>
        </div>
    )
}

export default Company
