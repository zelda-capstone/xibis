import React, {useContext} from 'react';
//import { withFirebase } from '../Firebase';
import firebase, { auth, db, withFirebase, FirebaseContext } from '../firebase'


const Play = (props) => {
    //const firebase = useContext(FirebaseContext)
    return (
        <>
            <div>
                Hello, USER!
            </div>
        </>
    )
}


export default Play