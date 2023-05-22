const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const router = require("./routes/router");
// Node.js server code

const nodemailer = require('nodemailer');

const app = express();

// middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)


app.get('/login',cors(),(req,resp)=>{

})

app.post('/login',async(req,resp)=>{
    // req.body gets data from inputs in page
    const{email,password} = req.body

    try {
        // console.log(email + ' and ' + password)
        const checkEmail = await collection.findOne({email:email})
        const checkPassword = await collection.findOne({password:password})

        if(checkEmail){
            if(checkPassword){
                resp.json('accountExist')
            }
            else{
                resp.json('passNotMatch')
            }
        }
        else{
            resp.json('emailNotExist')
        }
    }
    catch (e) {
        resp.json('notexist')
    }
})



app.post('/register',async(req,resp)=>{
    const{name,email,password} = req.body

    const data = {
        name:name,
        email:email,
        password:password
    }

    try {
        const checkEmail = await collection.findOne({email:email})

        if(checkEmail){
            resp.json('userExist')
        }
        else{
            resp.json('notexist')
            // if not exist insert data to mongodb
            await collection.insertMany([data])
        }
    }
    catch (e) {
        resp.json('notexist')
    }
})


app.listen(8000,()=>{
    console.log('the port is connected')
})


// ================= Contact Form Code ===============================


// Endpoint to handle form submissions
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'icoesender@gmail.com',
    pass: 'icoesender123'
  }
})
  
    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: 'pwdacait7@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
      });
  
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
  });