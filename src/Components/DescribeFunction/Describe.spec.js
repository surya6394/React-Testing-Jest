import { render, screen } from "@testing-library/react"
import { Describe } from "./Describe";

test("Testing Input Box", () => {
    render(<Describe />)
    let checkInput = screen.getByRole("textbox");
    let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name");

    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "Username");
    expect(checkInput).toHaveAttribute("id", "input");
    expect(checkInput).toHaveAttribute("type", "text");
    expect(checkInput).toHaveAttribute("value", "Surya Pratap");
})

describe("Describe test group - 1", () => {

    test("Test input box - 1", () => {
        render(<Describe />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toBeInTheDocument();
    })

    test("Test input box - 2", () => {
        render(<Describe />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toBeInTheDocument();
    })

    describe("inner describe test group", () => {

        test("inner input test - 1", () => {
            render(<Describe />)
            let checkInput = screen.getByRole("textbox");
            expect(checkInput).toBeInTheDocument();
        })

        test("inner input test - 2", () => {
            render(<Describe />)
            let checkInput = screen.getByRole("textbox");
            expect(checkInput).toBeInTheDocument();
        })

    })

})

describe.skip("Describe test group - 2", () => {

    test("Test input box - 1", () => {
        render(<Describe />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toBeInTheDocument();
    })

    test("Test input box - 2", () => {
        render(<Describe />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toBeInTheDocument();
    })

})


test("Snapshot testing for Describe group.", () => {
    const describe = render(<Describe />);
    expect(describe).toMatchSnapshot();
})