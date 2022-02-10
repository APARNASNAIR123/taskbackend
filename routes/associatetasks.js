const express= require('express'); 
const router= express.Router();
 const Task= require('../models/task'); 
      //associate api
      //total count

      router.get('/userdetails/:associate', async(req,res) =>{ 
        try{ 
          const tasks = await Task.find({associate:req.params.associate});
           res.json(tasks);
         }catch (err)
         { res.json({message:err}); 
         } 
       });
     
      router.get('/totalcount/:associate', async(req,res) =>{ 
        try{ 
         
          const count = await Task.count({associate:req.params.associate});
          console.log("COUNT", count)
              res.send({
                count
              })
         }catch (err)
         { res.json({message:err}); 
         } 
       });
   //new count
   router.get('/newcount/:associate', async(req,res) =>{ 
    try{ 
     
      const count = await Task.count({associate:req.params.associate,status:"new"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
   //inprogress
   router.get('/inprogresscount/:associate', async(req,res) =>{ 
    try{ 
     
      const count = await Task.count({associate:req.params.associate,status:"inprogress"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
   //completed
   router.get('/completedcount/:associate', async(req,res) =>{ 
    try{ 
     
      const count = await Task.count({associate:req.params.associate,status:"completed"});
      console.log("COUNT", count)
          res.send({
            count
          })
     }catch (err)
     { res.json({message:err}); 
     } 
   });
 
 
 

  //  router.get("/:taskid", async (req, res) => {
  //   try {
  //     const task = await Task.find({taskid:req.params.taskid})
  //     res.json(task);
  //   } catch (err) {
  //     res.json({ message: err });
  //   }
  // });

 
module.exports= router;