<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>POST data recipient</title>
</head>
<body>

<p>This is a demo script used to show that POST data has been received</p>

<?php

if (!empty($_POST)) {
    echo "You have POSTED the following data: <br/>";
    print_r($_POST);
} else {
    echo "You have not posted any data with an HTTP POST!";
}

?>

</body>
</html>
