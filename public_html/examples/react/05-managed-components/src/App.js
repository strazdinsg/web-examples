import {useState} from "react";

/**
 * A component representing the whole application
 */
export function App() {
    const DEFAULT_NAME = "Chuck";
    const [name, setName] = useState(DEFAULT_NAME);

    return (
        <main>
            <h1>Managed component example</h1>
            <p>This application shows how a React component can synchronize state with an HTML element. Try to update
                the name in the input field.</p>
            <h2>Hi, {name}!</h2>
            <label>
                Write your name here:
                <input type="text" value={name} onChange={handleInputChange}/>
            </label>
            <button onClick={resetName}>Reset</button>
        </main>
    );

    function handleInputChange(event) {
        setName(event.target.value);
    }

    function resetName() {
        setName(DEFAULT_NAME);
    }
}
