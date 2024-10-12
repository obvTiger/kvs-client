// KVSClient/updateKVSDBPermissions.js

module.exports = async function updateKVSDBPermissions(
    kvsId,
    allowPublicWrites,
    allowPublicReads,
    allowPublicModifications
  ) {
    if (!this.authToken) {
      throw new Error('No auth token found. Please login first.');
    }
    const response = await this.client.patch(
      `/update-kvsdb-permissions/${kvsId}`,
      {
        allowPublicWrites,
        allowPublicReads,
        allowPublicModifications,
      },
      {
        headers: {
          Authorization: `${this.authToken}`,
        },
      }
    );
    return response.data;
  };
  