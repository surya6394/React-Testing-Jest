import { configure, render, screen } from "@testing-library/react";
import GetByTestId from "./GetByTestId";
configure({testIdAttribute: "heading-id"})

test("Testing with Test Id Attribute changes", () => {
    render(<GetByTestId />);
    const heading1 = screen.getByTestId("heading1");
    expect(heading1).toBeInTheDocument();
})