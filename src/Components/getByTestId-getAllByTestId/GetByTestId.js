export default function GetByTestId() {
    return (
        <>
        
            <div>
                <h1>RTL query :- getByTestId()</h1>
                <div data-testid="div1-test-id">
                    Testing div with the test id
                </div>
                <div data-testid="div2-test-id">
                    Testing second div with different test Id
                </div>

                <div>
                    <h1 heading-id="heading1">
                        Configuration of test id attribute
                    </h1>
                </div>
            </div>
        
        </>
    )
}