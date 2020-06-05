import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

  

class Navbar extends Component {


    state ={
        checkForLogout: false,
    }

    logoutAction = () =>{
        this.setState({
                checkForLogout: !this.state.checkForLogout
            })    
    }
   

  
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" title="Hallo Leute" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hello
          </Typography>
          <Link to="/welcome/vikash">
          <Button color="default">Home</Button>
          </Link>
          {this.state.checkForLogout ? (<Link to="/logout">
          <Button color="default" onClick={this.logoutAction()}>Logout</Button>
          </Link>): (<Link to="/">
          <Button color="default">Login</Button> </Link>)}
        </Toolbar>
      </AppBar>
    );
  }
}



export default withStyles(useStyles)(Navbar);
