<?php
//Variables de verificación
$usuario = $_POST['usuarioValidar'];
$clave = $_POST['claveValidar'];

//Conectar con la BD
if(isset($_POST['usuarioValidar']) && !empty($_POST['usuarioValidar']) &&
isset($_POST['claveValidar']) && !empty($_POST['claveValidar']) )
{
    require_once('conexion.php');
    //Query de validación en la base de datos
    $consulta = "Select * from usuarios where usuario = '$usuario' or correo = '$usuario' and clave = '$clave'";
    $resultado = mysqli_query($EnlaceBD, $consulta);
    

    $filas = mysqli_num_rows($resultado);

    if($filas>0){
        echo '<script language="javascript">
        alert("Logeado Correctamente");
        window.location.href = "../index.html";
        </script>';
    }else{
        echo "Error en la autentificación";
    }
    mysqli_free_result($resultado);
    mysqli_close($EnlaceBD);

}else{
    echo "Error al conectar con la base de datos";
}

?>