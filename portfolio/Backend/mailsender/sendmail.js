const nodemailer = require('nodemailer')

const transportor = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
        user: 'gnbcreator@gmail.com',
        pass: 'ozrurwmmaqytyyql'
    }
})

async function SendEmail( email, subject, message ) {

    const mailOptions = {
        from: email,
        to: 'bochare7350@gmail.com',
        subject: subject,
        text: message
    };

    await transportor.sendMail(mailOptions, (error, info) => {
        error ? alert(error) : alert("Response Submited Successfuly " + info.response)
    });

}
module.exports = SendEmail;