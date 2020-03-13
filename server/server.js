import config from './config/config.js';
const express = require('./config/express.js')
 
// Use env port or default
const port = process.env.PORT || 5000;

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
