export default function MultipleElementCustomRole(){

    return(
        <>
        
            <div>
                <h1>Multiple Elements and Custom Role</h1>
                <button>Click 1</button>
                <button>Click 2</button>
                
                <label htmlFor="user1">user 1</label>
                <input type="text" id="user1"/>
                <label htmlFor="user2">User 2</label>
                <input type="text"  id="user2"/>

                <div role="div1">
                    Dummy Data
                </div>
            </div>
        
        </>
    )
}