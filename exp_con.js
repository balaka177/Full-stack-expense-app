const express=require('express');

const con=express.Router();
const Product=require('../models/exp_products');

const path=require('path');

const Sequelize=require('sequelize');
const { json } = require('body-parser');


exports.addProduct=(req,res,next)=>{
    res.sendFile(path.join('/home/vijay/Videos','Expense_tracker.html'));
}

exports.add_data=(req,res,next)=>{
    const cost=req.body.cst;
    const des=req.body.des;
    const cat=req.body.cat;
    Product.create({
        cost:cost,
        description:des,
        categeory:cat

    }).then(resp=>{
        res.redirect('/');
    }).catch(err=>{
        console.log(err);
    })
}

exports.users=async(req,res,next)=>{
   
   const users=await Product.findAll()
    res.status(200).json({allUsers:users})
}

exports.deleteUser=async(req,res) =>{
    const uid=req.params.id;
    await Product.destroy({where:{id:uid}});
    res.sendStatus(200);
}
