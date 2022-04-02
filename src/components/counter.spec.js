import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Counter from "./Counter";

describe("Basic rending of counter", () => {
    it("Should render Counter value", () => {
        const counter = shallow(<Counter />);
        const counterValue = counter.find(Text);

        expect(counterValue).toBeDefined();
    })

    it("Should equal to 0", () => { //for rendering 
        const component = render(<Counter />);
        expect(Component.getByTestId("Counter")).toHaveTextContent(0);
    })

    it("Should be able to increment", () => {

    })

    it("Should be able to decrement", () =>{

    })
})

describe("Testing counter functionality", () =>{

})