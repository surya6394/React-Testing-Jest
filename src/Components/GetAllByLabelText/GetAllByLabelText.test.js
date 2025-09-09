import { render, screen } from "@testing-library/react"
import GetAllByLabelText from "./getAllByLabelText"

test("Testing all input label present in the document using getAllByLabelText.", () => {
    render(<GetAllByLabelText />);
    const inputs = screen.getAllByLabelText('UserName');
    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue('surya');
    }
})

test("Testing all checkbox label present in the document using getAllByLabelText.", () => {
    render(<GetAllByLabelText />);
    const checkboxes = screen.getAllByLabelText('Skills');
    for (let i = 0; i < checkboxes.length; i++) {
        expect(checkboxes[i]).toBeInTheDocument();
        expect(checkboxes[i]).toBeChecked();
    }
})