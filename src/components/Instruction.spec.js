import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import { Instruction } from "./Instruction";

describe("Instruction", () => {
    test("should render loading indicator", () => {
        jest.useFakeTimers();
        const wrapper = render(<Instruction />);
        jest.runAllTimers();
    });
    test("should close modal", () => {
        jest.useFakeTimers();
        const { getByTestId } = render(<Instruction />);
        jest.runAllTimers();
        fireEvent.click(getByTestId("instruction-close-modal"));
    });

    test("should open modal", () => {
        jest.useFakeTimers();

        const onClick = jest.fn();
        const { getByTestId } = render(<Instruction />);
        jest.runAllTimers();
        fireEvent.click(getByTestId("instruction-open-modal"));
        //**/expect(onClick).toHaveBeenCalledTimes(1);
    });

  
    test("shouldchecked", () => {
        jest.useFakeTimers();

        const onChange = jest.fn();
        const { getByTestId } = render(<Instruction />);
        jest.runAllTimers();
        fireEvent.click(getByTestId("instruction-agree"), {
            event: { target: { checked: true } },
        });
        expect(onChange).toHaveBeenCalledTimes(0);
         fireEvent.click(getByTestId("instruction-agree"), {
            event: { target: { checked: false } },
        });
        expect(onChange).toHaveBeenCalledTimes(0);
    }); 
    test("shouldchecked", () => {
        localStorage.setItem("agree", true);
        jest.useFakeTimers();
        const onChange = jest.fn();
        const { getByTestId } = render(<Instruction />);
        jest.runAllTimers();
    });

    
});

afterEach(() => {
    cleanup();
});
