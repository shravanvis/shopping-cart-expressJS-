var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://i.redd.it/3oqqyn8x4z311.jpg',
        title: 'Counter Strike',
        description: 'counter strike GO',
        price: 12
    }),
    new Product({
        imagePath: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/3de50cf4-96d0-11e6-81a7-00163ed833e7/4036541787/need-for-speed-most-wanted-demo-maxresdefault%20(1).jpg',
        title: 'NFS Most Wanted',
        description: 'NFS most wanted Limted Edition',
        price: 20
    }),
    new Product({
        imagePath: 'https://static.gamespot.com/uploads/original/1179/11799911/2739781-heroes.png',
        title: 'COD Heroes',
        description: 'Call Of Duty Heroes',
        price: 30
    }),
    new Product({
        imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg?t=1545084399',
        title: 'PUBG',
        description: "PlayerUnknown's Battlegrounds",
        price: 40
    }),
    new Product({
        imagePath: 'https://i0.wp.com/chrometechny.in/wp-content/uploads/2016/08/mini-militia.jpeg?fit=634%2C356&ssl=1',
        title: 'Mini Militia',
        description: 'Mini Militia, 2D mobile phone game',
        price: 50
    }),
    new Product({
        imagePath: 'https://i.ytimg.com/vi/NX9K598sx9E/maxresdefault.jpg',
        title: 'IGI-2',
        description: 'PC games best game for 1GB RAM PCs',
        price: 60
    })

]

var done = 0;
for(var i = 0; i < products.length; i ++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    })
}

function exit(){
    mongoose.disconnect();
}