const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { jwtSecret } = require("../config/index");
const {
  addNewWorkspace,
  addNewApiKey,
} = require("../repositories/auth.respositories");

const workspaceSignupService = async (name) => {
  const workspace_id = uuid();
  const api_key_id = uuid();
  const res = await addNewWorkspace(name, workspace_id);
  const payload = {
    name: name,
    workspace_id: workspace_id,
  };
  const api_key = jwt.sign(payload, jwtSecret);
  const key_hash = await bcrypt.hash(api_key, 10);
  const res2 = await addNewApiKey(api_key_id, workspace_id, key_hash);

  return { api_key, workspace_id };
};

module.exports = { workspaceSignupService };
