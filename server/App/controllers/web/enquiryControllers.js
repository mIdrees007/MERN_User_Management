

/*for insert: we will recieve this api:
htpp://localhost:8020/api/website/enquiry/insert
*/

const enquiryModel = require("../../modles/enquiry.model.js")



let enquiryInsert= (req, res) => {
    //console.log(req.body.email)
    let {name, email, phone, message} = req.body
    let data = {name, email, phone, message}
    //console.log(`data received from body is ${data}`)
        
        /* console.log(sname, semail, sphone, smessage) 
        */
        let enquirydata = new enquiryModel({
            name,// as key made in model and recieving from front same
            email,
            phone,
            message
        })
        enquirydata.save().then(()=>{
            res.send({
                status:1,
                message:"Enquiry data saved successfully"
            })
        
        }).catch((err) => {
            res.send({
                status:0,
                message:"Error while saving the enquiry", err:err
            })
        }) 
}

//htpp://localhost:8020/api/website/enquiry/view
let enquiryList = async(req, res) => {
    let enquiry = await enquiryModel.find()
    res.send({
        status:1,
        enquiryList:enquiry
    })
}




let enquiryDelete = async(req, res) =>{
    let enId = req.params.id
    console.log(enId)
    let  enquiry = await enquiryModel.deleteOne({_id:enId})
    res.send({
        status:1,
        message:"Enquiry deleted successfully",
        id:enId,
        delResponse:enquiry
    })
} 

let enquirySingleRow = async(req, res) => {
    let singleId = req.params.id
    //console.log(singleId);
    
    
    let enquiry = await enquiryModel.findOne({_id:singleId})
    res.send({status:1, enquiry:enquiry})


}


let enquiryUpdate = async (req, res) => {
    let enquiryId = req.params.id
    let {name, email, phone, message} = req.body
    console.log(name, email, phone, message)
    let updateObj = {
        name,
        email,
        phone, 
        message
    }
    let updateResponse = await enquiryModel.updateOne({_id:enquiryId}, updateObj)
    res.send({
        status:1,
        message:"Enqury updated successfully",
        updateResponse
    })
}
module.exports = {enquiryInsert, enquiryList, enquiryDelete, enquirySingleRow,enquiryUpdate}