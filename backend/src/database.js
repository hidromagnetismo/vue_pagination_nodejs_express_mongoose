
const mongoose = require('mongoose');

// Acceso:

// mongo:  {mongo --username root --password "123456"}
// mongo:  {mongo "mongodb://root:123456@localhost:27017"}

// Crear Base de datos y usuario:

// {use node_vue_pagination}
// {

// db.createUser(
//    {
//       user: "root",
//       pwd: "123456",
//       roles: [ { role: "readWrite", db: "node_vue_pagination" } ]
//    }
// )

// }

const uri = 'mongodb://root:123456@localhost:27017/node_vue_pagination';
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})  
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));
