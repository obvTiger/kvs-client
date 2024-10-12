// KVSClient/getAllFromDatabase.js

module.exports = async function getAllFromDatabase(kvsId) {
    const databaseKey = this.databaseKeys[kvsId];
    if (!databaseKey) {
      throw new Error(`No database key found for kvsId ${kvsId}.`);
    }
    const headers = {
      Authorization: databaseKey,
    };
    const response = await this.client.get(`/database/all/${kvsId}`, {
      headers,
    });
    return response.data;
  };
  