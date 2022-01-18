import { Button } from '@material-ui/core'
import React from 'react'
import{ auth } from '../firebase'

function Signout() {
    return (
        <div>
            <Button variant="contained" onClick={()=>auth.signOut()} style={{padding:'5px'}}>SignOut</Button>
        </div>
    )
}

export default Signout
