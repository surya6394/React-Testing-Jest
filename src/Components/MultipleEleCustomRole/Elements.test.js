import { render, screen } from "@testing-library/react"
import MultipleElementCustomRole from "./Elements"

test("Testing Multiple elements with same Role", () => {
    render(<MultipleElementCustomRole />);
    const btn1 = screen.getByRole("button",{name: "Click 1"});
    const btn2 = screen.getByRole("button",{name: "Click 2"});
    const input1 = screen.getByRole("textbox",{name: "user 1"});
    const input2 = screen.getByRole("textbox",{name: "User 2"});
    const dv1 = screen.getByRole("div1");

    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(dv1).toBeInTheDocument();
})