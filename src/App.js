import React from 'react';
import './App.css';
import ResponsiveDrawer from './Components/ResponsiveDrawer';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/*Sidebar*/}
     
     <Router>
     <ResponsiveDrawer />
     </Router>
     {/*Form*/}
     
    </div>

  );
}

export default App;
