/*archivo Java Script*/

function validandoCampo() {
var valor = valor.getElementById("campo").value

if(valor == null || valor.length == 0 || /^\s+$/.test(valor)) {

	return false;
}

}

function valida_envia(){ 
    //valido el nombre 
    if (document.fvalida.nombre.value.length==0){ 
        alert("Tiene que escribir su nombre") 
        document.fvalida.nombre.focus() 
        return 0; 
    } 
