//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
    }

        function validar1(){
            var correo,clave,usuario;
            correo=document.getElementById("correo").value;
            usuario=document.getElementById("usuario").value;
            clave=document.getElementById("contraseña").value;
        
            correo_er=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
            clave_er =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
            usuario_er=/^[a-z\d_]{4,15}$/i;
        
            if(correo===""|| clave===""){
                alert("Todos los campos son requeridos");
                return false;
            }
            else if(correo.length>30){
                alert("El correo es muy largo");
                return false;
            }
            
            else if(!correo_er.test(correo)){
                alert("El correo no es valido");
                return false;
            }
            else if(usuario.length>15 || clave.length>16){
                alert("El usuario y la clave solo deben tener 16 caracteres como maximo");
                return false;
            }
            else if(!clave_er.test(clave)){
                alert("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.")
                return false;
            }
            else if(!usuario_er.test(usuario)){
                alert("El nombre de usuario debe tener un mínimo de 4 caracteres y un máximo de 15 ");
                return false;
            }
        
        }

        function validar(){
            var correo,clave;
            correo=document.getElementById("correo1").value;
            clave=document.getElementById("contraseña1").value;
        
            correo_er=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
            clave_er =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
           
        
            if(correo===""|| clave===""){
                alert("Todos los campos son requeridos");
                return false;
            }
            else if(correo.length>30){
                alert("El correo es muy largo");
                return false;
            }
            
            else if(!correo_er.test(correo)){
                alert("El correo no es valido");
                return false;
            }
            else if(clave.length>16){
                alert("la clave solo deben tener 16 caracteres como maximo");
                return false;
            }
            else if(!clave_er.test(clave)){
                alert("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.")
                return false;
            }
            
        
        }

            
             
        