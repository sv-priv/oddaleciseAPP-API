//const mongodb = require("mongodb").MongoClient;
const mongoose  = require('mongoose');

mongoose.connect( 'mongodb://mongo:27017/oddaleciseapp-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


//mongodb+srv://velkoskis:<oddalecise>@oddaleciseapp-api.y3fc4.mongodb.net/<oddalecise>?retryWrites=true&w=majority

//url = 'mongodb://mongo:27017/'
//string name, definition for defining fields


// const name = mongoose.model('Lakes',{
//     name:{
//         type:String
//     },
//     age: {
//         type: Number
//     }

// })

// const me = new User({
//     name: 'Stefan',
//     age:22
// })

// me.save().then((me) => {

//     console.log(me );
// }).catch(()=>{

// })
// const csvFilePath1 = '../../ezeraFilter.csv';


// const csvtojson = require("csvtojson");
// csvtojson()
// .fromFile(csvFilePath1)
// .then(csvData => {
//   console.log(csvData);

//     mongodb.connect(
//       url,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       (err, client) => {
//         if (err) throw err;

//         client
//           .db("oddaleciseapp-api")
//           .collection("lakes")
//           .insertMany(csvData, (err, res) => {
//             if (err) throw err;

//             console.log(`Inserted: ${res.insertedCount} rows`);
//             client.close();
//           });
//       }
//     );
//   });

// csvtojson()
// .fromFile("../../planiniFilter.csv")
// .then(csvData => {
//   console.log(csvData);

//     mongodb.connect(
//       url,
//       { useNewUrlParser: true, useUnifiedTopology: true },
//       (err, client) => {
//         if (err) throw err;

//         client
//           .db("oddaleciseapp-api")
//           .collection("mountains")
//           .insertMany(csvData, (err, res) => {
//             if (err) throw err;

//             console.log(`Inserted: ${res.insertedCount} rows`);
//             client.close();
//           });
//       }
//     );
//   });


