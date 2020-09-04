import React from 'react'
import firebase from './firebase';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Button,FormLabel,TextField, Input, Container} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
function Location() {
  // const script = document.createElement("script");
  // script.src = "./maps.js";
  // script.async = true;
  // document.body.appendChild(script);
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
              borderColor: '#fffff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#34C7CC',
            },
          },
        },
      })(TextField);
      function  uploadData(e){
        e.preventDefault()
        const url= document.getElementById("locav").value;
        firebase.database().ref('Minisite/Users/User2').update({
          locav:url
        })
        window.location.href="/Images"
      }
    return (
        <div>
        <Card className="cards" variant="outlined">
        <CardContent>
        <form noValidate autoComplete="off">
        <p style={{fontWeight:'700'}}>Upload Location AV</p>
        <FormLabel className="labels" htmlFor="my-input">Enter Location AV URL</FormLabel>
          <CssTextField      
          variant="outlined"
          type="url"
          id="locav"
          />
        <p style={{fontWeight:'700'}}>Pin Property Location</p>
        
          <Button variant="contained" className="nextbtn" type="submit" >Save and Continue<ArrowForwardIcon></ArrowForwardIcon></Button>
          </form>
  </CardContent>
  </Card>
        
        
        </div>
    )
}

export default Location
