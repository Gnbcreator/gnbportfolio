const express = require('express');
const SendEmail = require('./mailsender/sendmail');
const cors = require('cors')
const app = express();
app.use(express.json());

app.use(cors())

app.post('/contact', async (req, resp) => {
   const { email, subject, message } = req.body;
   try {
      SendEmail(email, subject, message)
      resp.send({ email, subject, message })

   } catch (error) {
      resp.send(error);
      alert('Somthing Went Wrong Email' + error);
   }

})
app.listen(5000)

