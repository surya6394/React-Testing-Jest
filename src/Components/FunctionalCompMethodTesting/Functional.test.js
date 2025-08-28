import { fireEvent, render, screen } from "@testing-library/react"
import Functional from "./Functional"
import { handleOtherMethod } from "./OtherMethod";

test("Testing Functional test methods.", () => {
    render(<Functional />);
    const btn = screen.getByTestId('btn1');
    fireEvent.click(btn);
    expect(screen.getByText("Surya")).toBeInTheDocument();
})

test("Testing Other functional method.",() => {
    expect(handleOtherMethod()).toMatch("Hi");
})