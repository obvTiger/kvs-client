// KVSClient/getFromDatabase.js

module.exports = async function getFromDatabase(kvsId, key) {
    const databaseKey = this.databaseKeys[kvsId];
    if (!databaseKey) {
      throw new Error(`No database key found for kvsId ${kvsId}.`);
    }
    const headers = {
      Authorization: databaseKey,
    };
    const response = await this.client.get(`/database/${kvsId}/${key}`, {
      headers,
    });
    return response.data;
  };
  