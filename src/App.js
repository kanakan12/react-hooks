import { useConfirm } from "./useConfirm";

function App() {
    const del = () => console.log("Del");
    const abort = () => console.log("Aborted");
    const confirmDel = useConfirm("test", del, abort);
    return (
        <>
        <button onClick={confirmDel}>Del</button>
        </>
    );
}

export default App;