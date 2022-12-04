const express = require('express')
const {MongoClient} = require('mongodb')

const app = express()
const PORT = process.env.PORT || 3000
const connection = 'mongodb+srv://admin:12345@cluster0.oyy0d2x.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(connection)

app.get('/', (req, res)=>{
    res.send({"status": "success"})
})
app.get('/users', async (req, res)=>{
    await client.connect()
    console.log('done')
    const users = await client.db().collection('cource_user')
    const user = await users.findOne()
    res.send(user)
})
app.listen(PORT, ()=>{
    console.log('PORT'+PORT)
})