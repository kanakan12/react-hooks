import { useNotification } from "./useNotification";

function App() {
    const triggerNotif = useNotification("test", {body: "This is test"});
    return (
        <>
            <button onClick={triggerNotif}>test</button>
        </>
    );
}

export default App;