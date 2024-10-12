// KVSClient/createKVSDB.js

module.exports = async function createKVSDB(
    databaseName,
    allowPublicWrites,
    allowPublicReads,
    allowPublicModifications
  ) {
    if (!this.authToken) {
      throw new Error('No auth token found. Please login first.');
    }
    const response = await this.client.post(
      '/create-kvsdb',
      {
        name: databaseName,
        allowPublicWrites: allowPublicWrites,
        allowPublicReads: allowPublicReads,
        allowPublicModifications: allowPublicModifications,
      },
      {
        headers: {
          Authorization: `${this.authToken}`,
        },
      }
    );
  
    const kvsId = response.data.kvsId;
    const databaseKey = response.data.accessToken;
    this.databaseKeys[kvsId] = databaseKey;
  
    return response.data;
  };
  