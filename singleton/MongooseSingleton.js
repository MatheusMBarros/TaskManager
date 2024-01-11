// MongooseSingleton.js
const mongoose = require('mongoose');

class MongooseSingleton {
    constructor() {
        if (!MongooseSingleton.instance) {
            this.isConnected = false;
            MongooseSingleton.instance = this;
        }

        return MongooseSingleton.instance;
    }

    async connect(url, options) {
        if (!this.isConnected) {
            try {
                await mongoose.connect(url, options);
                this.isConnected = true;
                console.log('Conexão com o MongoDB estabelecida.');
            } catch (error) {
                console.error('Erro ao conectar com o MongoDB:', error);
                throw error;
            }
        } else {
            console.log('Conexão já estabelecida.');
        }

        return mongoose.connection;
    }
}

module.exports = new MongooseSingleton();
