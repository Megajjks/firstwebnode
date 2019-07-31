const express = require('express');
const router = express.Router();
const nameweb = "FirstWeb";

router.get('/',(req,res)=>{
    res.render('index',{title: nameweb}); //path nos ayuda a pasar la ruta en terminos del sistema operativo que se este ejecutando
});

router.get('/contact',(req,res)=>{
    res.render('contact',{title: nameweb}); //path nos ayuda a pasar la ruta en terminos del sistema operativo que se este ejecutando
});

router.get('/about',(req,res)=>{
    res.render('about',{title: nameweb}); //path nos ayuda a pasar la ruta en terminos del sistema operativo que se este ejecutando
});

module.exports = router;