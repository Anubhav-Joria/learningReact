import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react'

function Disable() {
    const [name,setName] = useState("");

  return (
    <>
     <form action="/">
        <input type="text" value={name} onChange = {(e)=>{setName(e.target.value)}} />
    </form>
    {/* <button type="disable">Click</button> */}
    <button disabled={name.length > 0 ? "" : "disabled"}> Click</button>
    </>
  )
}
export default Disable