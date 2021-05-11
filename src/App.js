import {useFadeIn} from "./useFadeIn";

function App() {
    const el = useFadeIn(3, 2);
    return (
        <>
            <h1 {...el}>Test</h1>
        </>
    );
}

export default App;