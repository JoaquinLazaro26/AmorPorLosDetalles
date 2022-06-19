<?php
//Parámetros que se añadirán a la base de datos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$usuario = $_POST['usuario'];
$clave = $_POST['clave'];


//Verificador de si el campo no esté vacío
if(isset($_POST['nombre']) && !empty($_POST['nombre']) &&
isset($_POST['correo']) && !empty($_POST['correo']) &&
isset($_POST['usuario']) && !empty($_POST['usuario']) &&
isset($_POST['clave']) && !empty($_POST['clave']) )
{
    require_once('conexion.php');
    //Query de insert en la base de datos
    mysqli_query($EnlaceBD,"INSERT INTO usuarios VALUES('$nombre','$correo','$usuario','$clave')");
    echo '<script language="javascript">
        alert("Usuario Registrado Correctamente");
        window.location.href = "../pages1/Login.html";
        </script>';

}else{
    echo "Error al conectar con la base de datos";
}
?>