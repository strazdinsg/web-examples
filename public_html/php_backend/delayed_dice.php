<?php
// A script that returns a random number 1-6, simulates a throw of a dice.
// It also simulates a long operation - the response is sent back after some seconds
// Sleep time is the same as the value of the dice
$random_number = rand(1, 6);
sleep($random_number);
echo $random_number;
