import React from 'react'
import firebase from './firebase';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Button, TextField,FormLabel} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
function Video_walk() {
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
          const url= document.getElementById("url").value;
          firebase.database().ref('Minisite/Users/User2').update({
            vid_w_link:url
          })
          window.location.href="/Master Plan"
        }
    
    return (
        <div>
        <Card className="cards" variant="outlined">
        <CardContent>
          <form noValidate autoComplete="off">
          <p style={{fontWeight:'700'}}>Upload Video Walkthrough</p>
          <FormLabel className="labels" htmlFor="my-input">Enter Video Walkthrough URL</FormLabel>
            <CssTextField      
            variant="outlined"
            type="url"
            id="url"
            />
          
          <Button variant="contained" className="nextbtn" type="submit"  onClick={uploadData}>Save and Continue<ArrowForwardIcon></ArrowForwardIcon></Button>  
  
          </form>
  </CardContent>
  </Card>
        
        </div>
    )
}

export default Video_walk
