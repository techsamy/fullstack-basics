import express from 'express';

const app = express();

/* app.get('/', (req, res) => {
    res.send("Server is ready")
}); */

// get a list of 5 jokes
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is Another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A Fourth joke',
            content: 'This is a Fourth joke'
        },
        {
            id: 5,
            title: 'A Fifth joke',
            content: 'This is a Fifth joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})
