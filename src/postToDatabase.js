// KVSClient/postToDatabase.js

module.exports = async function postToDatabase(kvsId, key, value) {
    const databaseKey = this.databaseKeys[kvsId];
    if (!databaseKey) {
      throw new Error(`No database key found for kvsId ${kvsId}.`);
    }
    const headers = {
      Authorization: databaseKey,
    };
    const response = await this.client.post(
      `/database/${kvsId}/${key}`,
      { value },
      { headers }
    );
    return response.data;
  };
  