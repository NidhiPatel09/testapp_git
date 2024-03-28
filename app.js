console.log("Welcome from the app")

import express from 'express'

const app = express()

app.use(express.static('public'))

// use this line to set the view engine as ejs

app.set('view-engine', 'ejs')

const PORT = process.env.PORT || 8000

app.listen(PORT,()=> {
    console.log(`+++++************App is listening on ${PORT}************+++++`)
})

app.get('/home', (req, res) => {
        res.render('home.ejs')
    })