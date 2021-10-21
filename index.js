const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

const port = 3001;

app.get('/', (req, res) => {
    res.send('Hellow From the Node')
});

const users = [
    {id:0, name:'Srsity', email:'aaa@gamil.com', phone:'01788888888'},
    {id:1, name:'Arpita', email:'aaa@gamil.com', phone:'0178736752428'},
    {id:2, name:'Mony', email:'aaa@gamil.com', phone:'017453877582'},
    {id:3, name:'Mou', email:'aaa@gamil.com', phone:'01755387538'},
    {id:4, name:'Supto', email:'aaa@gamil.com', phone:'01777777'},
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
    res.send(users)
});

// app.METHOD
app.post('/users', (req,res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hittinf the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
});