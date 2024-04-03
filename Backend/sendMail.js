const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
    service:'gmail',
   
    
    auth: {
        user: "2004ayushsahu@gmail.com",
        pass: "eauwbmlvjlrfcykb",
      },
})


const sendMail = async (req,res) => {
    
   var Email = req.body.Email;
   var Name =  req.body.Name; 
    try {
        const info = await transporter.sendMail({
            from: '2004ayushsahu@gmail.com',
            to: `${Email}`,
            subject: "Hello ✔",
            text: `hllo ${Name} `,
        });
        console.log("Message sent: %s", info.messageId);
        // res.send("sent");
        res.send(req.body);
        
    } catch (error) {
        console.error("Error occurred while sending mail:", error);
        res.send(error);
    }
};
// sendMail(req,res).then(() => {
//     console.log("Mail sent successfully.");

// }).catch((error) => {
//     console.error("Error occurred:", error);
// });
module.exports = sendMail;