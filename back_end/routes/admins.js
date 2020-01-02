const router=require('express').Router();
let Admin=require('../models/admin.model');

router.route('/').get((req,res)=>{
   Admin.find()
    .then(admins=>res.json(admins))
    .catch(err=>res.status(400).json('Error : '+err))
});
router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    
    
    const newAdmin=new Admin({
        username,
        password

    });
    
   newAdmin.save()
    .then(()=>res.json('Admin addd'))
    .catch(err=>res.status(400).json('Error'+err));
});


router.route('/login/').post((req,res)=>{
    
Admin.find({$and:[{'username':req.body.username},{'password':req.body.password}]})
.then(login=>res.send(login))
.catch(err=>res.status(400).json('Error'+err));

      
		
	});
        


/*
 
 router.route('/delete/:id').get((req,res)=>{
    Filiere.findByIdAndDelete(req.params.id)
    .then(filiere=>res.json("Is deletet"))
    .catch(err=>res.status(400).json('Error'+err));
 });
 
 router.route('/updated/:id').post((req,res)=>{
    Filiere.findById(req.params.id)
    .then(filiere=>{
    filiere.nomFiliere=req.body.nomFiliere;
    
 
    student.save()
    .then(()=>res.json('Filiere updated'))
    .catch(err=>res.status(400).json('Error'+err));
 })
 });
*/

module.exports=router