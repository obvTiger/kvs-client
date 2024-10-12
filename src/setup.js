// KVSClient/setup.js

module.exports = async function setup(options) {
    if (options.token) {
      this.authToken = options.token;
    } else if (options.username && options.password) {
      await this.login(options.username, options.password);
    } else {
      throw new Error(
        'You must provide either a token or username and password.'
      );
    }
  
    // After authentication, retrieve databases and their keys
    await this.loadDatabaseKeys();
  };
  