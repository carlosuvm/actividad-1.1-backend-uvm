
var UsuariosModels = require("../models/usuarios.m");

class UsuariosController  {
todos() {
    return new Promise((resolve, reject)=>{
    
    resolve(UsuariosModels.todos());
    })
}    
crear(usuario) {
    return new Promise((resolve, reject)=>{
    UsuariosModels.crear(usuario)
    .then(()=>{
    resolve()
    })
    })
}
modificar(id) {

}
eliminar(id) {

}
}

module.exports = new UsuariosController();
