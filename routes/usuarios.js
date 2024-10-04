var express = require('express');
var router = express.Router();
var UsuariosController = require ("../controllers/usuarios.c");

/* GET lista de usuarios. */
router.get('/', function(req, res, next) {
  //res.send(UsuariosController.todos());
  UsuariosController.todos()
    .then((resultados)=>{
      res.send(resultados);
    })

});

/* POST crear usuarios. */
router.post('/', function(req, res, next) {
  //UsuariosController.crear(req.body)
  //res.send(UsuariosController.todos());
  UsuariosController.crear(req.body)
    .then(()=>{
      console.log("then create")
      UsuariosController.todos()
      .then((resultados)=>{
        console.log("then todos")
        res.send(resultados);
      })
    })
  
});

module.exports = router;
