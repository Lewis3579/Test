import React from "react";
import 'tachyons';
const Navigation = ({onRouteChange, isSignIn}) =>{
    if(isSignIn){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={()=>onRouteChange("signOut")} className='f3 link dim white underline pa3 pointer'>Sign out</p>
            </nav>
        );
    }
    else{
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={()=>onRouteChange("signIn")} className='f3 link dim white underline pa3 pointer'>Sign in</p>
                <p onClick={()=>onRouteChange("register")} className='f3 link dim white underline pa3 pointer'>Register</p>
            </nav>
            
        )
    }
    
}
export default Navigation;