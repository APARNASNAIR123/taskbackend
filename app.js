 const express = require('express'); 
 const app = express(); 
 var cors = require('cors')
 const mongoose = require('mongoose'); 
  app.use(express.json()); 
 const leadertaskRoute= require('./routes/leadertasks'); 
 const associatetaskRoute= require('./routes/associatetasks'); 
 const reporttask=require('./routes/taskreport'); 
 const taskcreation = require('./routes/taskcreation');
 app.use(cors({origin:'http://localhost:3000'}));
app.use('/atasks', associatetaskRoute)
app.use('/ltasks',leadertaskRoute);
app.use('/tasks',reporttask) 
app.use('/taskcreation',taskcreation)


 mongoose.connect("mongodb://localhost:27017/projectdb",() =>{ console.log("Connected to DB"); });

 app.listen(5000); 



 