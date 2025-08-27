import { fireEvent, render, screen } from "@testing-library/react"
import Events from "./Events"

// beforeAll(() => {
//     console.log("***** Before All *****");
// })

// beforeEach(() => {
//     console.log("***** Before Each *****");
// })

// afterEach(() => {
//     console.log("_____ After Each _____");
// })

test("Testing onChange Event in input element.", () => {
    console.log("Testing onChange Event in input element.");    
    render(<Events />)
    let inputCheck = screen.getByRole("textbox");
    fireEvent.change(inputCheck, {target:{value:'abc'}});
    expect(inputCheck.value).toBe("abcSurya");
})

test("Testing onClick Event on button click.", () => {
    console.log("Testing onClick Event on button click.");    
    render(<Events />)
    let btnClick = screen.getByRole("button");
    fireEvent.click(btnClick);
    expect(screen.getByText("The Man is here.")).toBeInTheDocument();
})


afterAll(() => {
    console.log("_____ After All _____");
})

// afterEach(() => {
//     console.log("_____ After Each _____");
// })