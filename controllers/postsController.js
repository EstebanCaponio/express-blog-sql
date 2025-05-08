const connection = require('../data/db');

// Index
function index(req, res) {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}

function show(req, res) {

    const id = req.params.id

    const sql = 'SELECT * FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'ricetta not found' });
        res.json(results[0]);
    });
}
function store(req, res) {

    // creazione nuovo id
    // const newId = posts[posts.length - 1].id + 1;

    // const newRicetta = {
    //     id: newId,
    //     title: req.body.title,
    //     content: req.body.content,
    //     image: req.body.image,
    //     tags: req.body.tags
    // }

    // posts.push(newRicetta);
    // console.log(posts);

    // res.status(201);
    // res.json(newRicetta);
}
function update(req, res) {
    // const id = parseInt(req.params.id);

    // const ricetta = posts.find(ricetta => ricetta.id === id);

    // if (!ricetta) {
    //     res.status(404);

    //     return res.json({
    //         status: 404,
    //         console: 'not found',
    //         message: 'ricetta non trovata'
    //     })
    // }
    // // aggiorno ricetta
    // ricetta.title = req.body.title;
    // ricetta.content = req.body.content;
    // ricetta.image = req.body.image;
    // ricetta.tags = req.body.tags;

    // console.log(posts);
    // res.json(ricetta);
}
function modify(req, res) {
    // res.send('Modifica parziale della ricetta ' + req.params.id);
}

function destroy(req, res) {

    const { id } = req.params;

    connection.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete ricetta' });
        res.sendStatus(204)
    });
}

// esportiamo tutto
module.exports = { index, show, store, update, modify, destroy }