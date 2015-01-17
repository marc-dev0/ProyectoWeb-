/*archivo Java Script*/

function validandoCampo() {
var valor = valor.getElementById("campo").value

if(valor == null || valor.length == 0 || /^\s+$/.test(valor)) {

	return false;
}

}