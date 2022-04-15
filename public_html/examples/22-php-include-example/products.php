<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP inclusion example</title>
    <?php include("components/stylesheets.php"); ?>
</head>
<body>
<?php
$HEADER_TEXT = "Our products"; // Redefine the main page title
include("components/header.php");
?>
<?php include("components/main-navigation.php"); ?>

<main>
    <p>
        Here we have the products. Go <a href="index.php">back to main page</a>.
    </p>
</main>
<?php include("components/aside.php"); ?>
<?php include("components/footer.php"); ?>
</body>
</html>