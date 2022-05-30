<?php
// datos para la coneccion a mysql
define('DB_SERVER','localhost');
define('DB_NAME','APLD_BD');
define('DB_USER','root');
define('DB_PASS','mysql');

$EnlaceBD = mysqli_connect(DB_SERVER, DB_USER, DB_PASS,DB_NAME) or die ("No se conectó a la BD!");
?> 