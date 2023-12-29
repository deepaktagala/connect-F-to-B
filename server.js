import express from 'express';

const app = express();

app.use(express.static('dist'));

// app.get('/',(req,res)=>{
//     res.send('Welcome')
// });


app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: 'joke no 1',
            summary: 'We tell a joke'
        },
        {
            id: 2,
            title: 'joke no 2',
            summary: 'We tell two joke'
        },
        {
            id: 3,
            title: 'joke no 3',
            summary: 'We tell three joke'
        },
        {
            id: 4,
            title: 'joke no 4',
            summary: 'We tell four joke'
        },
        {
            id: 5,
            title: 'joke no 5',
            summary: 'We tell five joke'
        },
    ]
    res.send(jokes)
});

const port = process.env.PORT || 4000;


app.listen(port,()=>{
    console.log(`listening on port http://localhost: ${port}`)
});