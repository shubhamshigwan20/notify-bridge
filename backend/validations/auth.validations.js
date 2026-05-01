const { z } = require("zod");
const workspaceSchema = z.object({
  name: z.string(),
});
module.exports = { workspaceSchema };
