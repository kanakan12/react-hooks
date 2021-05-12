import {useFullscreen} from "./useFullscreen";

function App() {
    const onFullScreen = isFull => {
        console.log(isFull ? "true" : "false");
    }
    const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
    return (
        <>
            <div ref={element}>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="test"/>
                <button onClick={exitFull}>exit screen</button>
            </div>
            <button onClick={triggerFull}>full screen</button>
        </>
    );
}

export default App;