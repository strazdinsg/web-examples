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
    echo "<p>You have POSTED the following data as an HTTP form POST: </p>\n";
    print_r($_POST);
} else {
    echo "<p>You have not posted any data with an HTTP POST! </p>\n";
}

$entityBody = file_get_contents('php://input');
if ($entityBody) {
    echo "<p>You have posted the following data in the request BODY:</p>\n" . $entityBody;
}

?>

</body>
</html>
