import { useState } from "react";

/**
 * A component representing the whole application
 */
export function App() {
  // Default values
  const DEFAULT_NAME = "Chuck";
  const DEFAULT_EMAIL = "microsoft@com.chuck";

  // State variables
  const [name, setName] = useState(DEFAULT_NAME);
  const [email, setEmail] = useState(DEFAULT_EMAIL);

  return (
    <main>
      <h1>Controlled component example</h1>
      <p>
        This application shows how a React component can synchronize state with
        an HTML element. Try to update the name or email in the input fields.
      </p>
      <h2>Hi, {name}!</h2>
      <label>
        Write your name here:
        <input type="text" value={name} onChange={handleNameInputChange} />
      </label>
      <label>
        Write your email here:
        <input type="text" value={email} onChange={handleEmailInputChange} />
      </label>
      <button onClick={resetFields}>Reset</button>

      <p>
        Just to see that the component gets updated DOM-element values
        immediately, here is your email which comes from the <code>email</code>{" "}
        property: {email}
      </p>
    </main>
  );

  /**
   * This function is called when the value in the name input-field (DOM element) is updated
   * @param event The DOM update event. The new value of the input field is in event.target.value
   */
  function handleNameInputChange(event) {
    setName(event.target.value);
  }

  /**
   * This function is called when the value in the email input-field (DOM element) is updated
   * @param event The DOM update event. The new value of the input field is in event.target.value
   */
  function handleEmailInputChange(event) {
    setEmail(event.target.value);
  }

  function resetFields() {
    setName(DEFAULT_NAME);
    setEmail(DEFAULT_EMAIL);
  }
}
