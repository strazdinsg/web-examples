import Link from "next/link";

/**
 * Component representing another main page.
 * @returns {JSX.Element}
 * @constructor
 */
export default function OtherPage() {
  return (
    <>
      <p>This is another page</p>
      <Link href="/">Go back</Link>
    </>
  );
}
