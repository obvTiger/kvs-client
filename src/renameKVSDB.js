// KVSClient/renameKVSDB.js

module.exports = async function renameKVSDB(kvsId, newName) {
    if (!this.authToken) {
      throw new Error('No auth token found. Please login first.');
    }
    const response = await this.client.patch(
      `/rename-kvsdb/${kvsId}`,
      { newName },
      {
        headers: {
          Authorization: `${this.authToken}`,
        },
      }
    );
    return response.data;
  };
  