import { Button, Input } from '@material-ui/core'
import React from 'react'
import {db,auth} from '../firebase'
import firebase from 'firebase'

function SendMessage() {
    const[msg,setMsg] = React.useState('');
    
    const sendMessage=async(e)=>{
        e.preventDefault()
        const {uid,photoURL} = auth.currentUser
        
        await db.collection('messages').add({
            text:msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
            <form onSubmit={sendMessage} >
                <Input value={msg} onChange={(e)=>setMsg(e.target.value) } placeholder="Messages..."/>
                <Button variant="contained" type="submit">Send</Button>
            </form>
        </div>
    )
}

export default SendMessage
