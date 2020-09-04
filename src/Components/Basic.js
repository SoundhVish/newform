import React from 'react';
import firebase from './firebase';
import './Basic.css';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import { FormLabel,TextField,TextareaAutosize,Button,Select } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuItem from '@material-ui/core/MenuItem';
function Basic() {
  const [price, setPrice] = React.useState('');

  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  const [prop_type, setProp_type] = React.useState('');

  const handleChange1 = (event) => {
    setProp_type(event.target.value);
  };
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

  function uploadData(e){
    e.preventDefault()
    const prop_name = document.getElementById("prop_name").value;
    const prop_type1 = prop_type;
    const add = document.getElementById("add").value;
    const tot_area= document.getElementById("tot_area").value;
    const pri_range= price;
    const rera_no= document.getElementById("rera_no").value;
    const bed_count= document.getElementById("bed_count").value;
    const bath_count= document.getElementById("bath_count").value;
    firebase.database().ref('Minisite/Users/User2').set({
      prop_name: prop_name,
      prop_type: prop_type1,
      add : add,
      tot_area:tot_area,
      pri_range:pri_range,
      rera_no:rera_no,
      bed_count:bed_count,
      bath_count:bath_count



      
    });
    window.location.href="/Company Info"
  }
  


  
    return (
        <div>
          <Card className="cards" variant="outlined">
      <CardContent>
        <form noValidate autoComplete="off">
        <p style={{fontWeight:'700',paddingBottom:'15px'}}>Give in some basic property details</p>
        <FormControl>
        <FormLabel className="labels" htmlFor="my-input">Property Name</FormLabel>
        <CssTextField      
        variant="outlined"
        className="username"
        name="prop_name"
        id="prop_name"
        type="text"

     />
      </FormControl>
      <FormControl>
    <FormLabel className="labels" htmlFor="my-input">Property Type</FormLabel>
    <CssTextField variant="outlined"
          id="prop_type"
          value={prop_type}
          onChange={handleChange1}
        >
          <MenuItem value={"10 - 20 Lakhs"}>10 - 20 Lakhs</MenuItem>
          <MenuItem value={"20 - 30 Lakhs"}>20 - 30 Lakhs</MenuItem>
          <MenuItem value={"30 - 40 Lakhs"}>30 - 40 Lakhs</MenuItem>
        </CssTextField>
  </FormControl>
      <FormControl>
      <FormLabel className="labels" htmlFor="my-input">Address</FormLabel>
      <CssTextField      
      variant="outlined"
      className="username"
      name="add"
      id="add"
      type="text"
   />
      </FormControl>
    <FormControl>
    <FormLabel className="labels" htmlFor="my-input">RERA No.</FormLabel>
    <CssTextField      
    variant="outlined"
    className="username"
    name="rera_no"
    id="rera_no"
    type="text"
 />
  </FormControl>
  <FormControl>
    <FormLabel className="labels" htmlFor="my-input">Total Area</FormLabel>
    <CssTextField      
    variant="outlined"
    className="username"
    name="tot_area"
    id="tot_area"
    type="text"
 />
  </FormControl>
  <FormControl>
  <FormLabel className="labels" htmlFor="my-input">Price Range</FormLabel>
  <CssTextField variant="outlined"
          id="pri_r"
          value={price}
          onChange={handleChange}
        >
          <MenuItem value={"10 - 20 Lakhs"}>10 - 20 Lakhs</MenuItem>
          <MenuItem value={"20 - 30 Lakhs"}>20 - 30 Lakhs</MenuItem>
          <MenuItem value={"30 - 40 Lakhs"}>30 - 40 Lakhs</MenuItem>
        </CssTextField>
 </FormControl>
<FormControl className="row">
<FormLabel className="labels" htmlFor="my-input">Bedroom Count</FormLabel>
<CssTextField      
variant="outlined"
className="username"
name="bed_count"
id="bed_count"
type="number"
/>
<FormLabel className="labels" htmlFor="my-input">Bathroom Count</FormLabel>
<CssTextField      
variant="outlined"
className="username"
name="bath_count"
id="bath_count"
type="number"
/>
</FormControl>
<FormControl>
<FormLabel className="desclabel" htmlFor="my-input">Description</FormLabel>
<TextareaAutosize name="desc" id="desc" aria-label="minimum height" rowsMin={5} style={{width:'42%',padding:'15px',borderRadius:'5px',borderColor:'#C4C4C4'}} placeholder="Describe this site shortly.." />
</FormControl>

<Button variant="contained" className="nextbtn" type="submit"  onClick={uploadData}>Save and Continue<ArrowForwardIcon></ArrowForwardIcon></Button>

        </form>
</CardContent>
</Card>
        </div>
    )
}

export default Basic
