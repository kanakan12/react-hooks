import { useTitle } from "./useTitle";

function App() {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <>
            <div>Hi</div>
        </>
    );
}

export default App;