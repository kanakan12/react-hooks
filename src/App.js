import { useClick } from "./useClick";

function App() {
    const onClick = () => console.log("test");
    const title = useClick(onClick);
    return (
        <>
            <h1 ref={title}>Test</h1>
        </>
    );
}

export default App;