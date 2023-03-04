/* This is how we say "hey, we will use the appendTimeSpan function from the tools.js" */

import { appendTime } from "./tools.js";

setInterval(showTime, 2000);

/**
 * A function which shows time on the page. It re-uses an imported function from another module
 */
function showTime() {
  const timeContainer = document.getElementById("time-container");
  appendTime(timeContainer);
}
