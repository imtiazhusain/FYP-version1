const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const webRouter = require('./routes/webRoutes')
const path = require('path')

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(webRouter)


app.listen(PORT,()=>{
    console.log(`app listening at http://localhost:${PORT}`);

})
