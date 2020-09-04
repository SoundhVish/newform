import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Button, Input,FormControl,FormLabel} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PublishIcon from '@material-ui/icons/Publish';
import './Brochure.css';
function Brochure() {
    return (
        <div>
        <Card className="cards" variant="outlined">
        <CardContent>
        <p style={{fontWeight:'700'}}>Upload Brochure PDF</p>
          <form noValidate autoComplete="off">
       
          <label className="custom-file-upload" id="file">
        <input 
        for="file"   
        type="file"
        accept="application/pdf"
        className="inputfile"
     />
         
       
        </label>
    
         

          <Button variant="contained" className="nextbtn" type="submit" href="/Location">Next<ArrowForwardIcon></ArrowForwardIcon></Button>
          </form>
  </CardContent>
  </Card>
       
        </div>
    )
}

export default Brochure
