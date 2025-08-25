import { render, screen } from "@testing-library/react"
import { Input } from "./Input"

test("Testing Input Box", () => {
    render(<Input />)
    let checkInput = screen.getByRole("textbox");
    let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");

    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "Username");
    expect(checkInput).toHaveAttribute("id", "input");
    expect(checkInput).toHaveAttribute("type", "text");
    expect(checkInput).toHaveAttribute("value", "Surya Pratap");
})