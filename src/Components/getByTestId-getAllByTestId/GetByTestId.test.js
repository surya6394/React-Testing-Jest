import { render, screen } from "@testing-library/react"
import GetByTestId from "./GetByTestId"
import GetAllByTestId from "./GetAllByTestId";

test("Testing div 1 with the test Id",() => {
    render(<GetByTestId />);
    const div1 = screen.getByTestId("div1-test-id");
    expect(div1).toBeInTheDocument();
})

test("Testing div 2 with different test id", () => {
    render(<GetByTestId />);
    const div2 = screen.getByTestId("div2-test-id");
    expect(div2).toBeInTheDocument();
})

test("Testing multiple heading elements with test id.", () => {
    render(<GetAllByTestId />);
    const heading = screen.getAllByTestId("h1-testid");
    for(let i = 0; i < heading.length; i++){
        expect(heading[i]).toBeInTheDocument();
    }
}) 
