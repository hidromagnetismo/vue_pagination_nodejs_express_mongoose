
const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors());
app.use('/', require('./routes/index'));

var port = 3000;

app.listen(port, () => {
    console.log(`Serve on port ${port}`);
});
