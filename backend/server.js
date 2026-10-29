const express = require('express');
const app = express();
PORT = 3000;

app.use(express.json());

let data = ['thanapoom']

app.get('/snacksilst', (req,res) => { 
    res.send('รายการขนม : ข้าวเกรียบ มันฝรั่ง');
});

app.get('/dashboard', (req,res) => { 
    res.send('<h1>mmmmmmmm</h1><input/>')
});

app.get('/api/data', (req,res) => {
    console.log('this one was for data')
    res.send(data);
});

app.post('/api/data', (req,res) => { 
    const newEntry = req.body
    res.sendStatus(201)
    data.push(newEntry.name)
});

app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
});
