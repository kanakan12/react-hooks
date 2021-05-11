import { useBeforeLeave } from "./useBeforeLeave";

function App() {
    const test = () => console.log("plz don`t leave");
    useBeforeLeave(test);
    return (
        <>
        <h1>Test</h1>
        </>
    );
}

export default App;