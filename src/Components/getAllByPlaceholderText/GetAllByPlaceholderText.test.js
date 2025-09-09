import { render, screen } from "@testing-library/react";
import GetAllByPlaceholderText from "./GetAllByPlaceholderText";


test("Testing placeholder in all input box", () => {
    render(<GetAllByPlaceholderText />);
    const inputbox = screen.getAllByPlaceholderText('Enter your name');
    for (let i = 0; i < inputbox.length; i++) {
        expect(inputbox[i]).toBeInTheDocument();
    }
})