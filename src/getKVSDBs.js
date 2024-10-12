// KVSClient/getKVSDBs.js

module.exports = async function getKVSDBs() {
    if (!this.authToken) {
      throw new Error('No auth token found. Please login first.');
    }
    const response = await this.client.post('/get-kvsdbs', {
      headers: {
        Authorization: `${this.authToken}`,

      },
    });
    return response.data.databases;
  };
  