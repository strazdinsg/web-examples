import {Navigation} from "./navigation/Navigation";
import {MainSection} from "./MainSection";
import {BrowserRouter as Router} from "react-router-dom";

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
    return (
        <Router>
            <Navigation/>
            <MainSection />
        </Router>
    );
}
