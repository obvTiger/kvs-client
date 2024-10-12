// KVSClient/logout.js

module.exports = async function logout() {
    if (!this.authToken) {
      throw new Error('No auth token found. Please login first.');
    }
    const response = await this.client.post(
      '/logout',
      {},
      {
        headers: {
          Authorization: `${this.authToken}`,
        },
      }
    );
    this.authToken = null; // Clear the auth token
    this.databaseKeys = {}; // Clear stored database keys
    return response.data;
  };
  