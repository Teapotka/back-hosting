const express = require('express')

const app = express()
const POST = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send({"status": "success"})
})
app.listen(PORT)