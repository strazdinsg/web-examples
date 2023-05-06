import { useEffect, useState } from "react";

/**
 * The main component for the Home page (index).
 * @param props Static properties passed to the component
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePage(props) {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    async function fetchJoke() {
      // The NEXT_PUBLIC_... environment variables will be accessible in
      // the browser - on client side
      const response = await fetch(process.env.NEXT_PUBLIC_JOKE_API_URL);
      const json = await response.json();
      setJoke(json.value);
    }

    fetchJoke();
  }, []);

  return (
    <article>
      <h1>Environment example</h1>
      <p>Here we show the use of environment variables</p>
      <p>Author: {props.author}</p>
      <p>Version: {props.version}</p>
      <h2>A random joke</h2>
      <p>And here is a joke from an external API:</p>
      <p>{joke || "Loading..."}</p>
    </article>
  );
}

export async function getStaticProps() {
  // This code is accessible (and executed) only on server side
  return {
    props: {
      version: process.env.VERSION,
      author: process.env.AUTHOR,
    },
  };
}
