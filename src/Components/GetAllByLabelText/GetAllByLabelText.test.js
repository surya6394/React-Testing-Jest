import { render, screen } from "@testing-library/react"
import GetAllByLabelText from "./getAllByLabelText"

test("Testing all label present in the document using getAllByLabelText.", () => {
    render(<GetAllByLabelText />);
    const inputs = screen.getAllByLabelText('UserName');
    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
    }
})