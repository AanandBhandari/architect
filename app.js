const express = require('express');
let app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodeOverRide = require('method-override');
const upload = require('express-fileupload');
// const flash = require('connect-flash');
// const session = require('express-session');
const {mongoDbUrl} = require('./config/database');
// const passport = require('passport');
const port = process.env.PORT || 3000;


// connecting to database
mongoose.connect(mongoDbUrl,{ useNewUrlParser: true })
.then((db) => console.log('sucessfully cconnected to the database'))
.catch(e => console.log(e));


app.use(express.static(path.join(__dirname,'public')));

app.engine('handlebars',exphbs({defaultLayout:'home'}));
app.set('view engine','handlebars');



// method overRide middleware
app.use(methodeOverRide('_method'));

// using fileuploads middleware
app.use(upload());

// body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// handlein routes
const home = require('./routes/home/index');
app.use('/',home);
const admin = require('./routes/admin/index');
app.use('/admin',admin);

app.listen(port,()=> {
    console.log(`the app is running on port: ${port}`);
});