<?php declare(strict_types = 1); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About PHP</title>
</head>
<body>
    <?php phpinfo(INFO_ALL & ~INFO_ENVIRONMENT & ~INFO_CONFIGURATION & ~INFO_VARIABLES); ?>
</body>
</html>