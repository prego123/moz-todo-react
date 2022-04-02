import React from "react";

const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <>
            <h1 data-testid="Counter"> {counter} </h1>
        </>
    );
};

export default Counter;