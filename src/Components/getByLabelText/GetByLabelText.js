export default function GetByLabelText(){

    return(
        <>
            <div>
                <div>
                    <h1>Get by label text Method: getByLabelText()</h1>
                    <label htmlFor="username">username</label>
                    <input id="username" type="text" name="GetByLabelText" defaultValue="surya" />
                </div>

                <div>
                    <label htmlFor="skills">skills</label>
                    <input id="skills" type="checkbox" name="GetByLabelText" defaultChecked={true}/>
                </div>
            </div>
        </>
    )
}