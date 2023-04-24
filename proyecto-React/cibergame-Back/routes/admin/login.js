var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');
const async = require('hbs/lib/async');


router.get('/', function(req, res, next) {
  res.render('admin/login',{
    layout: 'admin/layout'
  });
});

router.get('/logout', function (req, res, next){
  req.session.destroy();
  res.render('admin/login',{
    layout: 'admin/layout'
  })
})

router.post('/', async (req, res, next)=>{
  try{
    var usuario = req.body.usuario
    var password = req.body.password
    
    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password)

    if (data != undefined){
      req.session.id_usuario = data.id
      req.session.nombre = data.usuario
      res.redirect('/admin/novedades')
    }else{
      res.render('admin/login', 
      {layout: 'admin/layout',
       error:true
      })
    }
  }catch(error){
    console.log(error);
  }
})


router.get('/register', (req,res,next)=>{
  res.render('admin/registro',{
  layout: 'admin/layout',
  })
})

router.post('/register', async (req,res,next)=>{
  try {
      var user = req.body.usuario
      var pass = req.body.password
      if(user !="" && pass !=""){

          await usuariosModel.insertByUsernameAndPassword(user, pass);
          res.redirect('/admin/login')
      }else{
          res.render('admin/registro',{
              layout:'admin/layout',
              error:'true',
              message:'Todos los campos son requeridos'

          })
      }
  } catch (error) {
      console.log(error);
      res.render('admin/login',{
          layout:'admin/layout',
          error:true,
          message:'No se cargo la novedad'
      })
  }
})

module.exports = router;