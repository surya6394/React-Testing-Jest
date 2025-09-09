export default function GetAllByLabelText(){

    return(
        <>
        
            <div>
                <h1>Testing for All label present in the document</h1>
                <div>
                    <label htmlFor="username1">UserName</label>
                    <input name="username1" id="username1" defaultValue="surya" />
                </div>
                <div>
                    <label htmlFor="username2">UserName</label>
                    <input name="username2" id="username2" defaultValue="surya" />
                </div>
                <div>
                    <label htmlFor="username3">UserName</label>
                    <input name="username3" id="username3" defaultValue="surya" />
                </div>
            </div>

            <div>
                <div>
                    <label htmlFor="skill1">Skills</label>
                    <input type="checkbox" name="skill1" id="skill1" defaultChecked={true} />
                </div>
                <div>
                    <label htmlFor="skill2">Skills</label>
                    <input type="checkbox" name="skill2" id="skill2" defaultChecked={true} />
                </div>
                <div>
                    <label htmlFor="skill3">Skills</label>
                    <input type="checkbox" name="skill3" id="skill3" defaultChecked={true} />
                </div>
            </div>

        </>
    )
}