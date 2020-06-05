import React, { useEffect } from 'react';

function Logout(props) {

     useEffect(()=>{
        sessionStorage.removeItem('authUser');
     }, [])
    return (
        <div>
           Please Sign In to Proceed 
        </div>
    );
}

export default Logout;