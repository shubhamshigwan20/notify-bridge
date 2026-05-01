require("dotenv").config();
const { z } = require("zod");

const configs = {
  port: Number(process.env.PORT),
};

const configSchema = z.object({
  port: z.number("please enter positive integer for PORT").int().positive(),
});

const verifyConfig = async () => {
  try {
    const parseResult = configSchema.safeParse(configs);

    if (!parseResult.success) {
      console.log(parseResult.error);
      process.exit(1);
    }
  } catch (err) {
    console.log(err);
  }
};

verifyConfig();

const { port } = configs;

module.exports = { port };
