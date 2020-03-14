import config from './config/config.js';
const express = require('./config/express.js')
 
// Use env port or default
//onst port = process.env.PORT || 5000;

const app = express();

app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(config.port, () => console.log(`App now listening on port ${config.port}`));

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});

//const app = express.init()
//app.listen(port, () => console.log(`Server now running on port ${port}!`));
