import React, { Component } from 'react';

class ErrorComponent extends Component {
     
    componentDidMount(){
         sessionStorage.removeItem('authUser');
    }

    render() 
       {
           if(!this.props.setForInvalid){
               return (<h3>Invalid Username or password</h3>)
           } 
        return ( this.props.setForInvalid && 
            <div>
                 Some problem with the URI!!!!
            </div>
        );
    }
}

export default ErrorComponent;