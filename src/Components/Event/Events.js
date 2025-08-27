import React, { useState } from 'react'

const Events = () => {

    const [text, setText] = useState("");
    const [buttonClick, setButtonClick] = useState();

  return (
    <>
    
        <div>
            <h1>
                Testing onChange Events in input device.
            </h1>
            <input type='text' value={text} onChange={(e) => setText(e.target.value+"Surya")} />
            <button onClick={() => setButtonClick("The Man is here.")}>Click the Button</button>
            <h2>{buttonClick}</h2>
        </div>
    
    </>
  )
}

export default Events