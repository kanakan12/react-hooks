import useAxios from "./useAxios";

function App() {
    const {loading, data, error, refetch } = useAxios({url: "https://yts.mx/api/v2/list_movies.json"});
    return (
        <>
            <h1>{data && data.status}</h1>
            <h2>{error && "error"}</h2>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </>
    );
}

export default App;