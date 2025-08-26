import React, { useState } from 'react'

const Events = () => {

    const [text, setText] = useState("");

  return (
    <>
    
        <div>
            <h1>
                Testing onChange Events in input device.
            </h1>
            <input type='text' value={text} onChange={(e) => setText(e.target.value+"Surya")} />
        </div>
    
    </>
  )
}

export default Events