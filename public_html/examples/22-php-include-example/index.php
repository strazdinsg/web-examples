<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP inclusion example</title>
    <?php include("components/stylesheets.php"); ?>
</head>
<body>
<?php include("components/header.php"); ?>
<?php include("components/main-navigation.php"); ?>

<main>
    <p>
        This is our main page. Check out <a href="products.php">our products</a>!
    </p>
</main>
<?php include("components/aside.php"); ?>
<?php include("components/footer.php"); ?>
</body>
</html>