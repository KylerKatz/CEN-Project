import config from './config/config.js';
const express = require('./config/express.js');
var mongoose = require('mongoose'); 
mongoose.connect(config.db.uri);

// Use env port or default
//onst port = process.env.PORT || 5000;

const app = express();

app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(config.port, () => console.log(`App now listening on port ${config.port}`));

