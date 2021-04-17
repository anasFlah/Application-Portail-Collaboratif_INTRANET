const express = require ('express');
const mongoose = require ('mongoose');
const port = 3600 ;
const app = express()
const dotenv = require('dotenv');


dotenv.config()


app.use(express.json());
app.use(express.urlencoded({extended: true}))


////////////mongoose connect/////////////////
mongoose.connect(process.env.DB_CONNECTIONS, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));

////////////////////////


/////////////////////////////////////////////////////////////////////////////////////
app.get('/',(req,res)=>{
    res.send('server is working !')
})
////////////////////////////////////////////////////////////////////////////////////
app.post('/',(req,res)=>{
  res.send('testing server !');
})


///////////////////////////port listening ///////
app.listen(port,()=>console.log(`server start on ${port}`));
