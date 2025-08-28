import { render, screen } from "@testing-library/react";
import GetByRole from "./GetByRole"

test("Testing getByRole() method.",() => {
    render(<GetByRole />);
    const inputValue = screen.getByRole("textbox");
    const btn = screen.getByRole("button");

    expect(inputValue).toBeInTheDocument();
    expect(inputValue).toHaveValue("Surya");
    expect(inputValue).toBeDisabled();
    expect(btn).toBeInTheDocument();
})