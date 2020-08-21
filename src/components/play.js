import React from 'react';
import firebase, { auth, db } from '../firebase'


const Play = (props) => {
    const {currentUser} = auth
    if(currentUser){
        console.log("USER", currentUser)
    }
    return (
        <>
            <div>
                Hello, {props.user.displayName}
            </div>

        </>

    )
}


export default Play