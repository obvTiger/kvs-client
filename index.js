const axios = require('axios');

const setup = require('./src/setup');
const register = require('./src/register');
const login = require('./src/login');
const logout = require('./src/logout');
const getKVSDBs = require('./src/getKVSDBs');
const getDatabaseKey = require('./src/getDatabaseKey');
const loadDatabaseKeys = require('./src/loadDatabaseKeys');
const createKVSDB = require('./src/createKVSDB');
const renameKVSDB = require('./src/renameKVSDB');
const updateKVSDBPermissions = require('./src/updateKVSDBPermissions');
const getAllFromDatabase = require('./src/getAllFromDatabase');
const getFromDatabase = require('./src/getFromDatabase');
const postToDatabase = require('./src/postToDatabase');
const patchDatabase = require('./src/patchDatabase');
const deleteFromDatabase = require('./src/deleteFromDatabase');

class KVSClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL,
    });
    this.authToken = null;
    this.databaseKeys = {};
  }
}

KVSClient.prototype.setup = setup;
KVSClient.prototype.register = register;
KVSClient.prototype.login = login;
KVSClient.prototype.logout = logout;
KVSClient.prototype.getKVSDBs = getKVSDBs;
KVSClient.prototype.getDatabaseKey = getDatabaseKey;
KVSClient.prototype.loadDatabaseKeys = loadDatabaseKeys;
KVSClient.prototype.createKVSDB = createKVSDB;
KVSClient.prototype.renameKVSDB = renameKVSDB;
KVSClient.prototype.updateKVSDBPermissions = updateKVSDBPermissions;
KVSClient.prototype.getAllFromDatabase = getAllFromDatabase;
KVSClient.prototype.getFromDatabase = getFromDatabase;
KVSClient.prototype.postToDatabase = postToDatabase;
KVSClient.prototype.patchDatabase = patchDatabase;
KVSClient.prototype.deleteFromDatabase = deleteFromDatabase;

module.exports = KVSClient;
