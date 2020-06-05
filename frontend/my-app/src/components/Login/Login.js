import React , {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  setForInvalid: true
  }
 }

handleClick = (event)=>{
    event.preventDefault();
    if(this.state.username === 'vikash'){
   this.props.history.push(`/welcome/${this.state.username}`);
   sessionStorage.setItem('authUser', 'approved');
    }else{
       this.setState({
           ...this.state,
           setForInvalid: false
       })
       sessionStorage.removeItem('authUser');
    }
}



render()
     
   {  if(!this.state.setForInvalid){
          return <ErrorComponent {...this.state}/>
    }
       return (
    this.state.setForInvalid &&  (
          <div>
           <TextField
             hintText="Enter your Username"
             value={this.state.username}
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               value={this.state.password}
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         
        </div>
    ));
    
  }
}
const style = {
 margin: 15,
};
export default Login;