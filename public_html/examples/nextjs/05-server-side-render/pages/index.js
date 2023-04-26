/**
 * The main component for the home page.
 * @param {string} localTime The current server time in the format
 * YYYY-mm-dd HH:ii:ss.
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePage({ localTime }) {
  return (
    <main>
      <h1>Home page</h1>
      <p>The current server time is {localTime}</p>
    </main>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      localTime: getLocalTime(),
    },
  };
}

/**
 * Get local server time, return it in the format YYYY-mm-dd HH:ii:ss.
 * Month will always be two digits, day will always be two digits, and
 * hours will always be two digits.
 */
function getLocalTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * Pad a number with a leading zero if it is less than 10.
 * @param number
 * @returns {string}
 */
function pad(number) {
  return number.toString().padStart(2, "0");
}
