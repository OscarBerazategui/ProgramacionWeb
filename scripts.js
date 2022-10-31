let nombreUsuario=prompt("Ingrese su nombre:")
let hobbyUsuario=prompt("Ingrese su hobby:")
let clubUsuario=prompt("Ingrese su club favorito:")


alert("NOMBRE:"+nombreUsuario)
alert("HOBBY: " + hobbyUsuario)
alert("CLUB:"+clubUsuario)

edadUsuario=parseInt(0)

let nacimientoUsuario=prompt("Ingrese su año de nacimiento:")
let cumplioUsuario=prompt("¿Este año ya cumplió?: (si ya cumplio presione 1)")

cumplioUsuario=parseInt(cumplioUsuario)
nacimientoUsuario=parseInt(nacimientoUsuario)


if (cumplioUsuario == "1") {
    edadUsuario+=parseInt(2022)-parseInt(nacimientoUsuario);
  } else {
    edadUsuario+=parseInt(2022)-parseInt(nacimientoUsuario);
    edadUsuario-=parseInt(1)
  }

alert("edad:"+edadUsuario)