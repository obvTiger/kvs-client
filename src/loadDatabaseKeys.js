// KVSClient/loadDatabaseKeys.js

module.exports = async function loadDatabaseKeys() {
    const databases = await this.getKVSDBs(); // Fetch databases
  
    // For each database, retrieve and store its key
    for (const db of databases) {
      const kvsId = db.id; // Assuming 'id' is the database identifier
      const databaseKey = await this.getDatabaseKey(kvsId);
      this.databaseKeys[kvsId] = databaseKey;
    }
  };
  