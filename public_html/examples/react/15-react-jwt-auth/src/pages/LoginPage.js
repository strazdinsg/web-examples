import "./LoginPage.css";
import { useState } from "react";
import { sendAuthenticationRequest } from "../tools/authentication";
import { useNavigate } from "react-router-dom";

/**
 * Represents login page
 * @param props Props containing reference to setUser function
 * @return {null}
 * @constructor
 */
export function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    console.log("Submitting form");
    sendAuthenticationRequest(
      username,
      password,
      onLoginSuccess,
      (errorMessage) => setError(errorMessage)
    );
  }

  /**
   * This function is called when login is successful
   */
  function onLoginSuccess(userData) {
    props.setUser(userData);
    navigate("/");
  }

  let errorMessage = null;
  if (error) {
    errorMessage = <p className="error">{error}</p>;
  }

  return (
    <>
      <p>
        This is a "styled" login form. No fancy styles, but it shows the concept
        of using "your own" login form.
      </p>
      <form>
        <h2>Sign in</h2>
        <label className="sr-only" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errorMessage}
        <button type="submit" onClick={submitForm}>
          Sign in
        </button>
      </form>
    </>
  );
}
