import { render, screen } from "@testing-library/react";
import GetAllByText from "./GetAllByText";

test("getAllByText", () => {
    render(<GetAllByText />);
    const h1Elements = screen.getAllByText("Heading 1");
    expect(h1Elements.length).toBe(3);
    for (let i = 0; i < h1Elements.length; i++) {
        expect(h1Elements[i]).toBeInTheDocument();
    }
})

test("getAllByText", () => {
    render(<GetAllByText />);
    const para = screen.getAllByText("Get All By text RTL");
    expect(para.length).toBe(2);
    for (let i = 0; i < para.length; i++) {
        expect(para[i]).toHaveAttribute("id");
        expect(para[i]).toHaveClass("paraStyle");
    }
})