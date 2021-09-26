require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

class App{

    constructor(){
        this.server = express();

        mongoose.connect( process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        this.server.listen( process.env.PORT || 3333);

        this.middlewares();
        this.routes();


    }

    middlewares(){

        this.server.use(cors());

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }

}

module.exports = new App().server;