const { workspaceSignupService } = require("../services/auth.service");

const workspaceSignup = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { workspace_id, api_key } = await workspaceSignupService(name);

    res.status(201).json({ status: true, workspace_id, api_key });
  } catch (err) {
    next(err);
  }
};

module.exports = { workspaceSignup };
