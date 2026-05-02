const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { jwtSecret } = require("../config/index");
const { generateApiKey } = require("../utils/helper");
const {
  addNewWorkspace,
  addNewApiKey,
} = require("../repositories/auth.repositories");

const workspaceSignupService = async (name) => {
  const workspace_id = uuid();
  const { apiKey: api_key_id, prefix, secret } = generateApiKey();
  await addNewWorkspace(name, workspace_id);
  const payload = {
    name: name,
    workspace_id: workspace_id,
  };
  const api_key = jwt.sign(payload, jwtSecret);
  const secret_hash = await bcrypt.hash(secret, 10);
  await addNewApiKey(api_key_id, workspace_id, prefix, secret_hash);

  return { api_key, workspace_id };
};

module.exports = { workspaceSignupService };
