const { z } = require("zod");

const registerEventSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  description: z.string().min(2).max(100).trim(),
});

module.exports = { registerEventSchema };
