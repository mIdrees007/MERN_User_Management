let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
const enquiryRouter = require('./App/routes/web/enquiryRoutes')

require('dotenv').config()

let app = express()

app.use(express.json())
app.use(cors()) //midleware port different 

// Routes

app.use('/api/website/enquiry', enquiryRouter)
// prefix api: /api/website/enquiry
//url: htpp://localhost:8020/api/website/enquiry

//app.use('/api/website/view', enquiryRouter)
// prefix api: /api/website/enquiry
//url: htpp://localhost:8020/api/website/view
// Database connetion: 


//app.use('/api/website/delete/:id', enquiryRouter)
// prefix api: /api/website/enquiry
//url: htpp://localhost:8020/api/website/delete/id
// Database connetion: 


mongoose.connect(process.env.dburl).then(() => {
    console.log("Connect to MongoDB")
    // server will run: htpp://localhost:8020/
    app.listen(process.env.port || 3000, () => {
        console.log("Server is running:")
    })
}).catch((err) => {console.log(err)})