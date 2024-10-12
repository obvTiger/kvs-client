// KVSClient/patchDatabase.js

module.exports = async function patchDatabase(kvsId, key, value) {
    const databaseKey = this.databaseKeys[kvsId];
    if (!databaseKey) {
      throw new Error(`No database key found for kvsId ${kvsId}.`);
    }
    const headers = {
      Authorization: databaseKey,
    };
    const response = await this.client.patch(
      `/database/${kvsId}/${key}`,
      { value },
      { headers }
    );
    return response.data;
  };
  