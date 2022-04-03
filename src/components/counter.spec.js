import React from "react";
import { shallow } from "enzyme";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe("Basic rending of counter", () => {
    it("Should render Counter value", () => {
        const counter = shallow(<Counter />);
        const counterValue = counter.find(Text);

        expect(counterValue).toBeDefined();
    })

    it("Should equal to 0", () => { //for rendering 
        const component = render(<Counter />);
        expect(component.getByTestId("Counter")).toHaveTextContent(0);
    })

    it("Should be able to increment", () => { //button if created are rendered or not
        const { getByTestId } = render(<Counter/>);
        expect(getByTestId("up-button")).not.toHaveAttribute("disabled");
    })

    it("Should be able to decrement", () =>{
        const { getByTestId } = render(<Counter/>);
        expect(getByTestId("down-button")).not.toHaveAttribute("disabled");
    })
})

describe("Testing counter functionality", () =>{
    it("Increment counter when increment button is pressed", ()=>{
        const { getByTestId } = render(<Counter />);
        fireEvent.click(getByTestId("up-button"));

        expect(getByTestId("Counter")).toHaveTextContent("1");
    })

    it("Decrement counter when decrement button is pressed", ()=>{
        
    })
})