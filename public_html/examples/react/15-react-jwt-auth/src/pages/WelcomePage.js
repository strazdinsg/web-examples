/**
 * Represents the welcome page - the front page
 * @return {JSX.Element}
 * @constructor
 */
export function WelcomePage() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Welcome to our page. Here we demonstrate basic security handling with
        JSON Web Tokens (JWT) for an application consisting of separated backend
        and frontend. The backend is a Spring Boot application, the frontend is
        a React JS application.
      </p>
    </>
  );
}
