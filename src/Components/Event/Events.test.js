import { fireEvent, render, screen } from "@testing-library/react"
import Events from "./Events"

test("Testing onChange Event in input element.", () => {
    render(<Events />)
    let inputCheck = screen.getByRole("textbox");
    fireEvent.change(inputCheck, {target:{value:'abc'}});
    expect(inputCheck.value).toBe("abcSurya");
})