import { Navigation } from "./Navigation";
import { MainContent } from "./MainContent";

/**
 * A component representing the whole application.
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <>
      <Navigation />
      <MainContent />
    </>
  );
}

export default App;
