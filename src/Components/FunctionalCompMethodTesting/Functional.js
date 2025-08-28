import { useState } from "react"
import { handleOtherMethod } from "./OtherMethod";

function Functional(){

    const [text, setText] = useState("");

    const handleChangeData = () => {
        setText("Surya");
    }

    return (
        <>
        
            <div>
                <h1>Functional Component Method Testing</h1>
                <button data-testid="btn1" onClick={() => handleChangeData()}>Update Text</button>

                <h2>{text}</h2>

                <button onClick={() => handleOtherMethod()}>Click Button</button>
            </div>
        
        </>
    )
}

export default Functional;