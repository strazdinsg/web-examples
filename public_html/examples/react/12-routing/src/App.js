import { Navigation } from "./navigation/Navigation";
import { MainSection } from "./MainSection";
import { BrowserRouter } from "react-router-dom";

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <MainSection />
    </BrowserRouter>
  );
}
