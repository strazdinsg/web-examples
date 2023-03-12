<?php
require_once("cors_handling.php");
// A script that returns a random number 1-6, simulates a throw of a die.
// If parameter `n` is specified in the request, return an array of n dice

$dieValue = throwDie();

if (isSleepRequired()) {
  sleep($dieValue);
}

$numOfDice = getRequestedNumOfDice();

if ($numOfDice > 1) {
  $response = getJsonArrayOfDice($numOfDice);
} else {
  $response = $dieValue;
}

// Return this in the HTTP response body
echo $response;



/**
 * Throw a die.
 * @return int Value of the die, in the range 1-6.
 */
function throwDie(): int {
  return rand(1, 6);
}

/**
 * Get the number of requested dic, look into the HTTP request arguments.
 * @return int
 */
function getRequestedNumOfDice(): int {
  $numOfDice = 1;
  if (isset($_REQUEST["n"])) {
    $numOfDice = ensureValueInRange($_REQUEST["n"], 1, 10);
  }
  return $numOfDice;
}

/**
 * Ensure the value n is within range [min, max].
 * @param int $n The value to check
 * @param int $min Min allowed value
 * @param int $max Max allowed value
 * @return int The value of n, enforced in the given range.
 */
function ensureValueInRange(int $n, int $min, int $max): int {
  if ($n < $min) {
    $n = $min;
  } else if ($n > $max) {
    $n = $max;
  }
  return $n;
}

/**
 * Throw a set of dice, return a JSON array with their values.
 * @param int $numOfDice Number of dice to throw
 * @return string JSON representation of an array containing the dice values
 */
function getJsonArrayOfDice(int $numOfDice): string {
  $dice = [];
  for ($i = 0; $i < $numOfDice; ++$i) {
    $dice[] = throwDie();
  }
  return json_encode($dice);
}

/**
 * Check if sleep is requested by a wrapper script.
 * @return bool True when sleep is required, false otherwise.
 */
function isSleepRequired(): bool {
  global $sleep; // We assume that sleep is required when a global variable $sleep is set to a
  // non-false value
  return isset($sleep) && $sleep == true;
}
