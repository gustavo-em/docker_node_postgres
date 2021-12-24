import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('ab aaaas')
    return res.send('hw  12w')

})



app.listen(3333, () => console.log('run1'))     