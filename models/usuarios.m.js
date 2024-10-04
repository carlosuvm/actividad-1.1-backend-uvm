const { v4: uuidv4 } = require('uuid');
uuidv4();

let usuariosDB =[
    {
        id: "1",
        nombre: "Carlos Perez",
        contraseña: "1234"
    },
    {
        id: "2",
        nombre: "Maria Briceño",
        contraseña: "abcd"
    },
    {
        id: "3",
        nombre: "Juan Bermudez",
        contraseña: "1a2b3c"
    },
    {
        id: "4",
        nombre: "Jesus Mendoza",
        contraseña: "121212"
    },
]




class UsuariosModels  {
todos() {
    console.log("../models/todos")
    return usuariosDB;
}
crear(usuario) {
    //usuario.id = uuidv4();
    //usuariosDB.push(usuario);
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        usuario.id = uuidv4();
        usuariosDB.push(usuario)
        resolve()
    }, 1000);

})
}
modificar(id) {

}
eliminar(id) {

}
}

module.exports = new UsuariosModels();
