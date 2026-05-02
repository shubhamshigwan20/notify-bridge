const { z } = require("zod");
const workspaceSchema = z.object({
  name: z.string().min(2).max(100).trim(),
});
module.exports = { workspaceSchema };
