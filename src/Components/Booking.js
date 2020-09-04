import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import {Button,FormLabel,TextField} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
function Booking() {
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
    return (
        <div>
        <Card className="cards" variant="outlined">
        <CardContent>
        <p style={{fontWeight:'700'}}>Give your customers a link to book property</p>
          <form noValidate autoComplete="off">
          <FormLabel className="labels" htmlFor="my-input">Enter Booking URL</FormLabel>
    <CssTextField      
    variant="outlined"
    className="username"
    name="username"
    type="url"
 />
          
          <Button variant="contained" className="nextbtn" type="submit" href="/BookURL">Finish<DoneIcon></DoneIcon></Button>
          </form>
  </CardContent>
  </Card>
        
        
        </div>
    )
}

export default Booking
