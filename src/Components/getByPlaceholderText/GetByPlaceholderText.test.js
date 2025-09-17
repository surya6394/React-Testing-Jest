import { render, screen } from "@testing-library/react"
import GetByPlaceholderText from "./GetByPlaceholderText"

test("Testing placeholder in input box", () => {
    render(<GetByPlaceholderText />);
    const inputbox = screen.getByPlaceholderText('Enter your name');
    expect(inputbox).toBeInTheDocument();
    expect(inputbox).toHaveValue('surya');
})