import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Button,FormLabel} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Amenities.css';
function Amenities() {
    return (
        <div>
        <Card className="cards" variant="outlined">
        <CardContent>
        <p style={{fontWeight:'700'}}>Select all available Amenities</p>
          <form noValidate autoComplete="off">
          <Button variant="contained" className="nextbtn" type="submit" href="/BookURL">Next<ArrowForwardIcon></ArrowForwardIcon></Button>
          <FormLabel className="image-checkbox">
          <img className="img-responsive" src="assets/images/badminton.png" />
          <input type="checkbox" name="image[]" id="sustain" defaultValue/>
          <p>Badminton Court</p>
          <i className="fa fa-check" style={{display:'none'}} />
        </FormLabel>
  
          </form>
  </CardContent>
  </Card>
        
        </div>
    )
}

export default Amenities
