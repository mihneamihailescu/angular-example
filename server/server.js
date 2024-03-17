const express = require('express')

const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["test1", "test2"] })
})

app.listen(5001, () => { console.log("STARTED SERVER") })