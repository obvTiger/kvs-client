// KVSClient/deleteFromDatabase.js

module.exports = async function deleteFromDatabase(kvsId, key) {
    const databaseKey = this.databaseKeys[kvsId];
    if (!databaseKey) {
      throw new Error(`No database key found for kvsId ${kvsId}.`);
    }
    const headers = {
      Authorization: databaseKey,
    };
    const response = await this.client.delete(`/database/${kvsId}/${key}`, {
      headers,
    });
    return response.data;
  };
  