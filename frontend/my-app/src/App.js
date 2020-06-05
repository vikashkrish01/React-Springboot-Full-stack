import React from 'react';
import './App.css';
import Login from './components/Login/Login'; 
import {Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import Worklist from './components/WorkList/Worklist';
import Navbar from './components/NavBar/Navbar';
import { MuiThemeProvider } from 'material-ui/styles';
import Footer from './components/Footer/FooterComponent';
import WorkEditTable from './components/WorkList/WorkEditTable';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <MuiThemeProvider> 
      <Navbar />
      
      <Switch> 
        <Route path="/" exact component={Login}/>
        <Route path="/logout" exact component={Logout}/>
        <Route path="/welcome/:name" component={Welcome}/>
        <Route path="/worklist" component={Worklist}/>
        <Route component={ErrorComponent}/>
       </Switch>
       </MuiThemeProvider>
       <Footer/>
    </div>
  );
}

export default App;
