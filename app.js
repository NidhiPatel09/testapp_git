console.log("Welcome from the app")

import express from 'express'

const app = express()

const PORT = process.env.PORT || 8000

app.listen(PORT,()=> {
    console.log(`App is listening on ${PORT}`)
})