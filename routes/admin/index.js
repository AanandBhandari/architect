const router = require('express').Router();
router.all('/*',(req,res,next) => {
    req.app.locals.layout = 'admin';
    next();
})
router.get('/',(req,res) => {
    res.render('admin/index')
    // res.send('helloworld')
});
module.exports = router;