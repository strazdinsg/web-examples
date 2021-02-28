<?php
require("cors_handling.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>A dummy login</title>
    <style>
        .error {
            color: red;
        }

        .success {
            color: green;
        }
    </style>
</head>
<body>

<?php
$EXPECTED_USERNAME = "john";
$EXPECTED_KEY = "42";
?>

<h1>Demo script</h1>
<p>This is a demo script used in an exercise. If you successfully send an HTTP POST with
    username=<?= $EXPECTED_USERNAME; ?> and key=<?= $EXPECTED_KEY; ?>,
    you will get a "Success" messages, error messages otherwise.</p>
<h1>Received data</h1>
<p>You have POSTed the following data:</p>
<p><?php print_r($_POST); ?></p>
<h1>Status check</h1>
<p>Checking your submission...</p>
<ul>

    <?php

    if (!empty($_POST)) {
        checkField("username", $EXPECTED_USERNAME);
        checkField("key", $EXPECTED_KEY);
    } else {
        showError("You have not posted any data with an HTTP POST!");
    }

    function checkField($field_name, $expected_value)
    {
        if (isset($_POST[$field_name])) {
            if ($_POST[$field_name] == $expected_value) {
                showSuccess("Field $field_name received, value OK");
            } else {
                showError("Field $field_name received, but the value is wrong: expected $expected_value, got "
                    . $_POST[$field_name]);
            }
        } else {
            showError("Field $field_name not received!");
        }
    }

    function showError($msg)
    {
        echo "<li class='error'>$msg</li>";
    }

    function showSuccess($msg)
    {
        echo "<li class='success'>$msg</li>";
    }

    ?>
</ul>

</body>
</html>
