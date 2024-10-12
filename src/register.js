// KVSClient/register.js

module.exports = async function register(username, password) {
    const response = await this.client.post('/register', {
      username,
      password,
    });
    return response.data;
  };
  