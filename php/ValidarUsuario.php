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
    if($usuario == "admin"){
        $consulta = "Select * from usuarios where usuario = 'admin' and clave = 'admin'";
        $resultado = mysqli_query($EnlaceBD, $consulta);

        $filas = mysqli_num_rows($resultado);

        if($filas>0){
        echo '<script language="javascript">
        alert("Bienvenido administrador");
        window.location.href = "../template.html";
        </script>';
        }else{
        echo '<script language="javascript">
        alert("Error en la autentificación");
        window.location.href = "../pages/Login.html";
        </script>';
        }
        mysqli_free_result($resultado);
        mysqli_close($EnlaceBD);
    }else if($usuario != "admin"){
            $consulta = "Select * from usuarios where usuario = '$usuario' or correo = '$usuario' and clave = '$clave'";
            $resultado = mysqli_query($EnlaceBD, $consulta);
            $filas = mysqli_num_rows($resultado);
            if($filas>0){
                echo '<script language="javascript">
                alert("Logeado Correctamente");
                window.location.href = "../index.html";
                </script>';
            }else{
                echo '<script language="javascript">
                alert("Error en la autentificación");
                window.location.href = "../pages/Login.html";
                </script>';
            }
            mysqli_free_result($resultado);
            mysqli_close($EnlaceBD);
        }
}
else{
    echo '<script language="javascript">
    alert("Todos los campos son obligatorios");
    window.location.href = "../pages/Login.html";
    </script>';
}
?>