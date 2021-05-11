import React, { useState } from "react";

function App() {
    const [item, setItme] = useState(0);
    const incrementItem = () => setItme(item + 1);
    const decrementItem = () => setItme(item - 1);
    return (
        <div>
            <h1>{item}</h1>
            <button onClick={incrementItem}>Inc</button>
            <button onClick={decrementItem}>Dec</button>
        </div>
    )
}

export default App;