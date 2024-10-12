// test.js

const KVSClient = require('./index.js');

(async () => {
  const baseURL = 'https://kvs.wireway.ch'; // Replace with your actual API base URL
  const client = new KVSClient(baseURL);

  console.log('--- Starting Tests ---\n');

  let username, password, kvsId;

  try {
    // Register a new user
    console.log('Registering a new user...');
    username = 'testUser_' + Date.now(); // Ensure unique username
    password = 'testPassword123';
    const registerResponse = await client.register(username, password);
    console.log(`Registered user: ${username}\n`);

    // Setup client with new credentials
    console.log('Setting up client with new credentials...');
    await client.setup({ username, password });
    console.log('Client setup complete.\n');

    // Get KVS Databases with authentication
    console.log('Getting KVS Databases with authentication...');
    try {
      const kvsdbs = await client.getKVSDBs();
      console.log('KVS Databases:', kvsdbs, '\n');
    } catch (error) {
      console.error(
        'Error getting KVS Databases with authentication:',
        error.response?.data || error.message
      );
    }

    // Create a new KVS Database
    console.log('Creating a new KVS Database...');
    const kvsdbResponse = await client.createKVSDB(
      'TestDatabase',
      true,  // allowPublicWrites
      true,  // allowPublicReads
      true   // allowPublicModifications
    );
    kvsId = kvsdbResponse.kvsId;
    console.log('Created KVS Database:', kvsdbResponse, '\n');

    // Add a key-value pair with authentication
    console.log('Adding a key-value pair with authentication...');
    await client.postToDatabase(kvsId, 'testKey', 'testValue');
    console.log('Added key-value pair: testKey => testValue\n');

    // Get the value with authentication
    console.log('Getting the value with authentication...');
    const value = await client.getFromDatabase(kvsId, 'testKey');
    console.log('Retrieved value:', value, '\n');

    // Update KVS Database permissions
    console.log('Updating KVS Database permissions with authentication...');
    try {
      const updatePermissionsResponse = await client.updateKVSDBPermissions(
        kvsId,
        false, // allowPublicWrites
        false, // allowPublicReads
        false  // allowPublicModifications
      );
      console.log(
        'Updated KVS Database permissions:',
        updatePermissionsResponse,
        '\n'
      );
    } catch (error) {
      console.error(
        'Error updating KVS Database permissions with authentication:',
        error.response?.data || error.message
      );
    }

    // Get all key-value pairs from the database
    console.log(
      'Getting all key-value pairs from the database with authentication...'
    );
    try {
      const allData = await client.getAllFromDatabase(kvsId);
      console.log('All key-value pairs:', allData, '\n');
    } catch (error) {
      console.error(
        'Error getting all key-value pairs with authentication:',
        error.response?.data || error.message
      );
    }

    // Delete a key-value pair with authentication
    console.log('Deleting a key-value pair with authentication...');
    try {
      const deleteResponse = await client.deleteFromDatabase(kvsId, 'testKey');
      console.log('Deleted key-value pair:', deleteResponse, '\n');
    } catch (error) {
      console.error(
        'Error deleting key-value pair with authentication:',
        error.response?.data || error.message
      );
    }

    console.log('--- Tests Completed ---\n');
  } catch (error) {
    console.error('An unexpected error occurred:', error.response?.data || error.message);
  }
})();
