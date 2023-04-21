import Link from "next/link";

/**
 * Component representing the index page.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  return (
    <>
      <h1>Hello, Next.JS!</h1>
      <p>
        You can go to the other page by clicking on{" "}
        <Link href="/other-page">this link.</Link>
      </p>
    </>
  );
}
