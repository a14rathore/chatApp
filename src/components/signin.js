import React from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase';
import { auth } from '../firebase'


function Signin() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div >
            <Button variant="contained" onClick={signInWithGoogle}> Sign In With Google</Button>
        </div>
    )
}

export default Signin
