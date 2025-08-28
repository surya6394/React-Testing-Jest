import { render, screen } from "@testing-library/react"
import GetAllByRole from "./GetAllByRole";

test("Testing getAllByRole() method.",() => {
    render(<GetAllByRole />);
    const btns = screen.getAllByRole("button");
    const options = screen.getAllByRole("option");

    for(let i = 0; i < btns.length - 1; i++){
        expect(btns[i]).toBeInTheDocument();
    }

    for(let i = 0; i < options.length - 1; i++){
        expect(options[i]).toBeInTheDocument();
    }
})