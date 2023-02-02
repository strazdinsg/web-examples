<?php
require_once("cors_handling.php");
// A script that returns a random number 1-6, simulates a throw of a dice.
$number = rand(1, 6);

// Check if the external wrapper requested a sleep
if (isset($sleep) && $sleep) {
  // Sleep time is the same as the value of the dice
  sleep($number);
}

if (isset($_POST["n"])) {
  // Multiple dice requested
  // Make sure we get an int within allowed boundaries
  $num_dice = (int) $_POST["n"];
  if ($num_dice < 1) {
    $num_dice = 1;
  } else if ($num_dice > 10) {
    $num_dice = 10;
  }
  $dice = [];
  for ($i = 0; $i < $num_dice; ++$i) {
    $dice[] = rand(1, 6);
  }
  echo json_encode($dice);
} else {
  // Single dice requested
  echo $number;
}

