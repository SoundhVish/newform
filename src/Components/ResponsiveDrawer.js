import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import Brochure from './Brochure';
import Location from './Location';
import Video from './Video_walk';
import Amenities from './Amenities';
import Booking from './Booking';
import BusinessIcon from '@material-ui/icons/Business';
import Company from './Company.js';
import LinkIcon from '@material-ui/icons/Link';
import Basic from './Basic.js'
import MultipleImageUploadComponent from './images'
import MasterImageUploadComponent from './Masterplan'
import AppBar from '@material-ui/core/AppBar';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import Divider from '@material-ui/core/Divider';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import {useParams, useLocation } from 'react-router-dom'
import './Sidebar.css';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      overflow:'auto',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:'#fafafa',
  },
  link:{ textDecoration:'none!important', color:theme.palette.text.primary},
}));

function ResponsiveDrawer(props) {
  const { children, value, index, ...other } = props;
  const { window } = props;
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sidebar">
      <div className={classes.toolbar} >
      <img className="sidebar_img" src="https://media-cdn.tripadvisor.com/media/photo-s/14/ec/84/f1/casagrande.jpg"/>
      <Typography className="sidebar_heading">Property Name</Typography> 
      </div>
      <Divider />
      
      <List>
      <Link to="/" className={classes.link} >
      <ListItem button selected={'/' === location.pathname}><ListItemIcon><InfoOutlinedIcon/></ListItemIcon><ListItemText primary={"Basic Property Info"} /></ListItem>
      </Link>
      <Link to="/Company Info" className={classes.link} >
      <ListItem button selected={'/Company Info' === location.pathname}><ListItemIcon><BusinessIcon/></ListItemIcon><ListItemText primary={"Company Info"} /></ListItem>
      </Link>
      <Link to="/Brochure" className={classes.link}>
      <ListItem button selected={'/Brochure' === location.pathname}><ListItemIcon><MenuBookOutlinedIcon/></ListItemIcon><ListItemText primary={"Brochure"} /></ListItem>
      </Link>
      <Link to="/Location" className={classes.link}>
      <ListItem button selected={'/Location' === location.pathname}><ListItemIcon><AddLocationOutlinedIcon/></ListItemIcon><ListItemText primary={"Location"} /></ListItem>
      </Link>
      <Link to="/Images" className={classes.link}>
      <ListItem button selected={'/Images' === location.pathname}><ListItemIcon><AddPhotoAlternateOutlinedIcon/></ListItemIcon><ListItemText primary={"Images"} /></ListItem>
      </Link>
      <Link to="/Video Walkthrough" className={classes.link}>
      <ListItem button selected={'/Video Walkthrough' === location.pathname}><ListItemIcon><MovieOutlinedIcon/></ListItemIcon><ListItemText primary={"Video Walkthrough"} /></ListItem>
      </Link>
      <Link to="/Master Plan" className={classes.link}>
      <ListItem button selected={'/Master Plan' === location.pathname}><ListItemIcon><QueueOutlinedIcon/></ListItemIcon><ListItemText primary={"Master Plan & Design Images"} /></ListItem>
      </Link>
      <Link to="/Amenities" className={classes.link}>
      <ListItem button selected={'/Amenities' === location.pathname}><ListItemIcon><CheckBoxOutlinedIcon/></ListItemIcon><ListItemText primary={"Amenities"} /></ListItem>
      </Link>
      <Link to="/BookURL" className={classes.link}>
      <ListItem button selected={'/BookURL' === location.pathname}><ListItemIcon><LinkIcon/></ListItemIcon><ListItemText primary={"Booking URL"} /></ListItem>
      </Link>
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           Minisite Creator
           
          </Typography>
          <img className="brand"
          src="https://cdn.glitch.com/bc403f72-b5d3-43ec-ad72-74f21c0382f6%2Flogo-black3.png?v=1585059218361"
          alt="logo"
      />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
        <Route exact path="/">
        <Container><Basic></Basic></Container></Route>
        <Route exact path="/Company Info">
        <Container><Company></Company></Container></Route>
        <Route exact path="/Brochure">
        <Container><Brochure></Brochure></Container></Route>
        <Route exact path="/Location">
        <Container><Location></Location> </Container></Route>
        <Route exact path="/Images">
        <Container>
        <MultipleImageUploadComponent></MultipleImageUploadComponent></Container></Route>
        <Route exact path="/Video Walkthrough">
        <Container><Video></Video></Container></Route>
        <Route exact path="/Master Plan">
        <Container><MasterImageUploadComponent></MasterImageUploadComponent></Container></Route>
        <Route exact path="/Amenities">
        <Container><Amenities></Amenities></Container></Route>
        <Route exact path="/BookURL">
        <Container><Booking></Booking></Container></Route>
        </Switch>

      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

