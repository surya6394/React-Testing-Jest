import { render, screen } from "@testing-library/react"
import GetByLabelText from "./GetByLabelText";

test("getByLabelText method testing for text.",() => {
    render(<GetByLabelText />);
    const input = screen.getByLabelText("username");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("surya");
})

test("getByLabelText method testing for checkbox.",() => {
    render(<GetByLabelText />);
    const checkbox = screen.getByLabelText("skills");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    // expect(checkbox).not.toBeChecked();
})