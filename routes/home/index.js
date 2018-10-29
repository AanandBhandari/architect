const router = require('express').Router();
router.all('/*',(req,res,next) => {
    req.app.locals.layout = 'home';
    next();
})
router.get('/',(req,res) => {
    res.render('home/index')
    // res.send('helloworld')
});
router.get('/work',(req,res) => {
    res.render('home/work')
    // res.send('helloworld')
});
router.get('/services',(req,res) => {
    res.render('home/services')
    // res.send('helloworld')
});
router.get('/blog',(req,res) => {
    res.render('home/blog')
    // res.send('helloworld')
});
router.get('/about',(req,res) => {
    res.render('home/about')
    // res.send('helloworld')
});
router.get('/contact',(req,res) => {
    res.render('home/contact')
    // res.send('helloworld')
});
module.exports = router;