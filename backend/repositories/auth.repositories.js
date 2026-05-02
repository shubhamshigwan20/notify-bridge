const db = require("../db/db");

const addNewWorkspace = async (name, workspace_id) => {
  const result = await db.query(
    `INSERT INTO workspaces (id,name) VALUES ($1, $2) RETURNING id, name, created_at`,
    [workspace_id, name],
  );
  if (!result.rowCount) {
    throw new Error("failed to create workspace");
  }
  return result.rows[0];
};

const addNewApiKey = async (
  api_key_id,
  workspace_id,
  key_hash,
  rate_limit = 100,
) => {
  const result = await db.query(
    `INSERT INTO api_keys (id,workspace_id,key_hash,rate_limit) VALUES ($1, $2, $3, $4) RETURNING id, workspace_id, key_hash, rate_limit`,
    [api_key_id, workspace_id, key_hash, rate_limit],
  );
  if (!result.rowCount) {
    throw new Error("failed to create api key");
  }
  return result.rows[0];
};

module.exports = { addNewWorkspace, addNewApiKey };
