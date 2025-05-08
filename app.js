const express = require('express');
const app = express();
const port = 2002;
const postsRouter = require('./routers/posts');
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

app.use(express.json());

app.use(express.static('public'));

app.use('/posts', postsRouter);

app.use(notFound);

app.use(errorsHandler);

app.get('/', (req, res) => {
    res.send('sei nella home');
})

app.listen(port, () => {
    console.log(`hei, Example app listening on port ${port}`)
});