export function Describe(){

    function PrintValue(){
        console.log("Number is here.");
    }

    return (
        <div>
            <h1>
                We are testing Input Box.
            </h1>
            <input 
            id="input"
            type="text" 
            placeholder="Enter User Name" 
            name="Username"
            value="Surya Pratap"
            onChange={PrintValue}
            />
        </div>
    )
}