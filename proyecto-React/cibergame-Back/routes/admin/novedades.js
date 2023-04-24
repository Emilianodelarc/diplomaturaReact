var express = require('express')
var router = express.Router()
var novedadesModel = require('./../../models/novedadesModel');
const async = require('hbs/lib/async');

router.get( '/',async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render( 'admin/novedades', {
    layout:'admin/layout',
    usuario: req.session.nombre, novedades
    })
})

router.get('/agregar', (req,res,next)=>{
    res.render('admin/agregar',{
    layout: 'admin/layout',
    })
})

router.post('/agregar', async (req,res,next)=>{
    try {
        if(req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo !=""){
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        }else{
            res.render('admin/agregar',{
                layout:'admin/layout',
                error:'true',
                message:'Todos los campos son requeridos'

            })
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar',{
            layout:'admin/layout',
            error:true,
            message:'No se cargo la novedad'
        })
    }
})

router.get('/editar/:id', (req,res,next)=>{
    var id = req.params.id;
    
    res.render('admin/editar',{
    layout: 'admin/layout',
    id:id
    })
})

router.post('/editar/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      console.log(req.params);
      await novedadesModel.updateNovedad(id, data);
      res.redirect('/admin/novedades');
    } catch (error) {
      console.log(error);
      res.render('admin/editar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se pudo actualizar la novedad',
      });
    }
  });
  
  router.get('/eliminar/:id', async(req,res,next)=>{
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadById(id)
    res.render('admin/eliminar',{
    layout: 'admin/layout',
    id:id , novedad
    })
})

  router.post('/eliminar/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const result = await novedadesModel.deleteNovedad(id);
      if (result) {
        console.log('Novedad eliminada con éxito');
        res.redirect('/admin/novedades');
      } else {
        console.log('No se pudo eliminar la novedad');
        res.status(500).send('No se pudo eliminar la novedad');
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('No se pudo eliminar la novedad');
    }
  });


module.exports = router;