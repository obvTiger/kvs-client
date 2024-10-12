// KVSClient/getDatabaseKey.js

module.exports = async function getDatabaseKey(kvsId) {
    if (!this.authToken) {
      throw new Error('No auth token found. Please login first.');
    }
    const response = await this.client.get(`/get-database-key/${kvsId}`, {
      headers: {
        Authorization: `${this.authToken}`,
      },
    });
    return response.data.databaseKey;
  };
  