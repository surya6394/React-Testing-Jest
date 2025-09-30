import { render, screen } from "@testing-library/react";
import GetByDisplayValue from "./GetByDisplayValue"

test("Testing html input element default value with RTL query.", () => {
    render(<GetByDisplayValue />);
    const input = screen.getByDisplayValue("Surya");
    expect(input).toBeInTheDocument();
})

test("Testing html textarea element default value with RTL query.", () => {
    render(<GetByDisplayValue />);
    const textarea = screen.getByDisplayValue("Pratap");
    expect(textarea).toBeInTheDocument();
})

test("Testing multiple html element default value with RTL query.", () => {
    render(<GetByDisplayValue />);
    const element = screen.getAllByDisplayValue("nigam");
    for (let i = 0; i < element.length; i++) {
        expect(element[i]).toBeInTheDocument();
    }
})