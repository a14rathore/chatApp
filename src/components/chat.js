import React, { useState, useEffect } from 'react'
import Signout from './Signout'
import { db } from '../firebase'
import SendMessage from './SendMessage'

function Chat() {
    const [messages, setmessages] = useState([])
    useEffect(() => {
        db.collection("messages").orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
            setmessages(snapshot.docs.map(doc => doc.data()))
        })

    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Signout />
            <div style={{
                backgroundColor: "wheat", margin: '0 10rem', overflow: 'scroll',
                padding: '2em', minHeight: '75vh', border: "2px solid blue",
            }}>
                {messages.map(({ id, text, photoURL }) => (

                    <span key={id} style={{ display: 'flex', maxWidth: '20em' }}>
                        <img style={{ border: '2px solid yellowgreen', borderRadius: '20px' }}
                            src={photoURL} alt="" height='30' width='30' />
                        <p style={{
                            backgroundColor: 'yellowgreen',
                            padding: '5px', borderRadius: '5px'
                        }}>{text}</p>
                    </span>


                ))}
            </div>
            <SendMessage />
        </div>
    )
}

export default Chat
