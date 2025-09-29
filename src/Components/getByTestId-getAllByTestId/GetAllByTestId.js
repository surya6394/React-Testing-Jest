export default function GetAllByTestId() {
    return (
        <>
        
            <div>
                <h1>RTL query :- getAllByTestId()</h1>
                <h1 data-testid="h1-testid">
                    Testing multiple elements in heading-1.
                </h1>
                <h1 data-testid="h1-testid">
                    Testing multiple elements in heading-2.
                </h1>
            </div>
        
        </>
    )
}