var express = require('express')
var router = express.Router()
var novedadesModel = require('./../../models/novedadesModel');
var util = require('util')
var cloudinary = require('cloudinary').v2
const uploader = util.promisify(cloudinary.uploader.upload)
const destroy = util.promisify(cloudinary.uploader.destroy)

router.get( '/',async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedad =>{
      if (novedad.img_id) {
        const imagen = cloudinary.image(novedad.img_id,{
          width:100,
          height:100,
          crop: 'fill'
        });
        return {
          ...novedad,
          imagen
        }
      }else{
        return{
          ...novedad,
          imagen:''
        }
      }
    })

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
        var img_id= '';
        if (req.files && Object.keys(req.files).length > 0) {
          imagen = req.files.imagen;
          img_id= (await uploader(imagen.tempFilePath)).public_id
        }
        if(req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo !=""){
            await novedadesModel.insertNovedad({
              ...req.body,
              img_id
            });
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

router.get('/editar/:id', async(req,res,next)=>{
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadById(id)
    res.render('admin/editar',{
    layout: 'admin/layout',
    id:id, novedad
    
    })
})

router.post('/editar/:id', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
          img_id = null;
          borrar_img_vieja = true
        }else{
          if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id
            borrar_img_vieja = true
          }
        }
        if (borrar_img_vieja && req.body.img_original) {
          await (destroy(req.body.img_original))
        }


      const id = req.params.id;
      const data = {...req.body, img_id};
      
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
      var novedad = await novedadesModel.getNovedadById(id)
      if (novedad.img_id) {
        await (destroy(novedad.img_id))
      }
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