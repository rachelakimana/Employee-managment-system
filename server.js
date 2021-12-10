import express from 'express';
 const app = express()
 
 app.use(express.json())
 
 app.get('/', (req, res) => {
     return res.status(200).send({'message': 'conglaturation! welcome to the employee management system'});
   
 })
 
 const port = app.listen(3000);
 
 console.log('app running on port', port)