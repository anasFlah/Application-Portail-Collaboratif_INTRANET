const express = require ('express');
const mongoose = require ('mongoose');
const port = 3600 ;
const app = express()
const dotenv = require('dotenv');


dotenv.config()


app.use(express.json());
app.use(express.urlencoded({extended: true}))


//mongoose connect 
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));




/////////////////////////////////////////////////////////////////////////////////////
app.get('/',(req,res)=>{
    res.send('server is working !')
})
////////////////////////////////////////////////////////////////////////////////////

app.listen(port,()=>console.log(`server start on ${port}`));
