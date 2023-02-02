<?php
require_once("cors_handling.php");

// A script that returns a random number 1-6, simulates a throw of a dice.
// It also simulates a long operation - the response is sent back after some seconds
$sleep = true;
require_once("throw_a_dice.php");