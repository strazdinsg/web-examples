<?php
header('Access-Control-Allow-Origin: *');

// Respond to CORS preflights
// Source from https://www.dinochiesa.net/?p=754
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  // For preflights return only the headers and not the content
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
  header('Access-Control-Allow-Headers: origin, content-type, accept');
  header('Access-Control-Max-Age: 3600');
  exit;
}
