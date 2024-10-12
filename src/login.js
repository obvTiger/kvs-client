// KVSClient/login.js

module.exports = async function login(username, password) {
    const response = await this.client.post('/login', {
      username,
      password,
    });
    this.authToken = response.data.token; // Store the auth token
    return response.data;
  };

