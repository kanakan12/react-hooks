import {useNetwork} from "./useNetwork";

function App() {
    const handleNetworkChange = online => {
        console.log(online ? "Online" : "Offline");
    }
    const onLine = useNetwork(handleNetworkChange);
    return (
        <>
            <h1>{onLine ? "Online" : "Offline"}</h1>
        </>
    );
}

export default App;