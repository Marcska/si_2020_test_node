var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/saluda',(req,res,next)=>{
  res.render('hola', {nombre:'Marco',
  colores:[
    {id:1, nombre:"rojo"},
    {id:2, nombre:"verde"},
    {id:3, nombre:"azul"},
    {id:4, nombre:"amarillo"}
  ]});
});
router.get('/alta',(req,res,next)=>{
  res.render('alta_comic',{});
});
router.post('/grabar',(req,res,next)=>{
  console.log(req.body);
  var nom=req.body.nombre;
  var url=req.body.imagen;
  var poder=req.body.poder;
  //guardar en mongo
  var miComic = Comic(
    {
      nombre: nom,
      imagen: url,
      poderes: poder
    }
  );
  miComic.save((err,data)=>{
    if(err) res.send('Error al guardar los datos');
    else res.render('alta ok',data);
  })
});
router.get('/istar',(req,res,next)=>{
  Comic.find({},(err,data)=>{
    
  });

});

module.exports = router;
