import { render, screen } from "@testing-library/react"
import Title from "./Title"

test("Testing of Title in img tag.",() => {
    render(<Title />);
    const text = screen.getByText(/title testing/i);

    const title  = screen.getByTitle(/ai generated images/i);

    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
})