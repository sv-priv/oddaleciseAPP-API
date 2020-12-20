const express = require('express')
require('./db/mongoose')
const Lake = require('./models/lakes')
const Mountain = require('./models/mountains')

const app = express()

const port = process.env.PORT || 3000


//sekoj json request go pravi vo objekt
app.use(express.json())

// app.post('/lakes', (req, res) => {
//     console.log(req.body.name);

//     const lake = new Lake(req.body)

//     lake.save().then(() => {

//         res.send(user)
//     }).catch((e) => {
//         res.status(400);
//         res.send(e)
//     })
//     res.send("test");
// })

app.get('/',(req,res)=>
{
    res.send("hello")
})


app.get('/lakes',(req, res) => {

    Lake.find({}).then((lakes) =>{

        res.send(lakes)
    }).catch((e) =>{
        res.status(500);
        res.send(e)
    })
})
app.get('/lakes/:name',(req, res) => {

    const _name = req.params.name

    Lake.findOne({title : _name}).then((lake) =>{

        if(!lake){
            res.status(404).send();
        }

        res.send(lake)
    }).catch((e) =>{
        res.status(500);
        res.send(e)
    })
})

app.get('/mountains',(req, res) => {

    Mountain.find({}).then((mountains) =>{

        res.send(mountains)
    }).catch((e) =>{
        res.status(500);
        res.send(e)
    })

})

app.get('/mountains/:name',(req, res) => {

        const _name = req.params.name

        Mountain.findOne({title : _name}).then((mountain) =>{

            if(!mountain){
                res.status(404).send();
            }

            res.send(mountain)
        }).catch((e) =>{
            res.status(500);
            res.send(e)
        })

})

app.listen(port, ()=>{
    console.log("server is up on port " + port);
})


