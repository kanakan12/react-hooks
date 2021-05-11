import React from "react";
import { useTabs } from "./useTabs";

const content = [
    {
        tab:"Section 1",
        content: "content 1"
    },
    {
        tab:"Section 2",
        content: "content 2"
    }
]

function App() {
    const {item, changeitem} = useTabs(0, content);
    return (
        <>
            {content.map(
                (section, index) => 
                <button 
                    onClick={() => changeitem(index)}
                    key={index}
                >{section.tab}</button>
            )}
            <div>{item.content}</div>
        </>
    )
}

export default App;