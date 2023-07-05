import express from 'express'
import config from 'config'
import { engine } from "express-handlebars";

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const prompt = req.body.prompt
    const size = req.body.size
    const number = req.body.number ?? 1

    console.log(prompt, size, number)

    // reload the page
    res.render('index')
})

app.listen(3000, () => console.log('Server started on port 3000'))