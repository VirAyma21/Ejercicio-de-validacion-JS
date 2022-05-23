
const formuluario= document.querySelector('form')
const usuarios= document.getElementById('usuarios')
const contraseña= document.getElementById('contraseña')

 formuluario.addEventListener('submit', e => {
    let error= false;
if (!usuarios.value.includes ('@')){
    alert('ingrese un @ en el campo usuario') 
    error= true;
}
if(contraseña.value === "") {
    alert('debe rellenar todos los campos')
    error= true;
}
    if(error){
        e.preventDefault();
    }
 })
