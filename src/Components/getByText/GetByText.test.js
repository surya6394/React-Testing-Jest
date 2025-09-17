import { render, screen } from "@testing-library/react"
import GetByText from "./GetByText"

test("getByText", () => {
    render(<GetByText />)
    const buttonElement = screen.getByText("Log In");
    expect(buttonElement).toBeInTheDocument();
})

test("getByText", () => {
    render(<GetByText />)
    const headingTag = screen.getByText("Heading 1");
    expect(headingTag).toBeInTheDocument();
})