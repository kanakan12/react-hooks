import React from "react";
import { useInput } from "./useInput";

function App() {
    const maxLen = value => value.length < 10;
    const name = useInput("I`m ", maxLen);
    return (
        <>
            <h1>hello</h1>
            <input placeholder="Name" {...name}/>
        </>
    )
}

export default App;