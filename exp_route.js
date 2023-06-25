const express=require('express');

const router=express.Router();

const control=require('../controllers/exp_con');

router.get('/',control.addProduct);

router.post('/add_data',control.add_data);

router.get('/users',control.users);

router.delete('/deleteUser/:id',control.deleteUser);

module.exports=router;