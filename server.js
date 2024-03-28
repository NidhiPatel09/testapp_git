console.log("Welcome from the app")

import express from 'express'

import mongoose from "mongoose"

import MongoStore from "connect-mongo"

import session from "express-session"

const app = express()

app.use(express.static('public'))

// use this line to set the view engine as ejs

app.set('view-engine', 'ejs')

const uri = process.env.MONGO_URI


const PORT = process.env.PORT || 8080

app.listen(PORT,()=> {
    console.log(`+++++************App is listening on ${PORT}************+++++`)
})

app.get('/', (req, res) => {
        res.render('home.ejs')
    })