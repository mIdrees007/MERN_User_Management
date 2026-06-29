

let express  = require('express')
const { enquiryInsert, enquiryList,enquirySingleRow, enquiryDelete, enquiryUpdate } = require('../../controllers/web/enquiryControllers')
let enquiryRouter = express.Router()

enquiryRouter.post("/insert", enquiryInsert)

//url: htpp://localhost:8020/api/website/enquiry/insert

enquiryRouter.get("/view", enquiryList)
//url: htpp://localhost:8020/api/website/enquiry/view

enquiryRouter.delete("/delete/:id",enquiryDelete)
//url: htpp://localhost:8020/api/website/enquiry/delte/id

enquiryRouter.get("/single/:id", enquirySingleRow)

enquiryRouter.put("/update/:id", enquiryUpdate)
module.exports = enquiryRouter