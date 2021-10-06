const express = require('express')
const routes = express.Router()

// dados
let db = [
    {'1': {Nome: 'Cliente 1', Idade: '23'} },
    {'2': {Nome: 'Cliente 2', Idade: '18'} },
    {'3': {Nome: 'Cliente 3', Idade: '38'} },
    {'4': {Nome: 'Cliente 4', Idade: '46'} },
    {'5': {Nome: 'Cliente 5', Idade: '19'} },
    {'6': {Nome: 'Cliente 6', Idade: '32'} },
    {'7': {Nome: 'Cliente 7', Idade: '25'} },
    {'8': {Nome: 'Cliente 8', Idade: '33'} }
]

// parte do http

// GET
routes.get('/', (req, res) => {
    return res.json(db)
})

// POST
routes.post('/post', (req, res) =>{
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

// DELETE
routes.delete('/del/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})

routes.put('/put/:id', (req, res) => {
    const act = req.params.id

    let newDB = db.filter(item => {
        if (!item[act])
            return item
    })

    db = newDB
    // db.push(act)
    return res.send(db)
})


module.exports = routes
