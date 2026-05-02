require("dotenv").config();
const { z } = require("zod");

const configs = {
  port: Number(process.env.PORT),
  pgHost: process.env.PGHOST,
  pgPort: 5432,
  pgDatabase: process.env.PGDATABASE,
  pgUser: process.env.PGUSER,
  pgPassword: process.env.PGPASSWORD,
  jwtSecret: process.env.JWT_SECRET,
};

const configSchema = z.object({
  port: z.number("please enter positive integer for PORT").int().positive(),
  pgHost: z.string(),
  pgPort: z.number(),
  pgDatabase: z.string(),
  pgUser: z.string(),
  pgPassword: z.string(),
  jwtSecret: z.string(),
});

const parseResult = configSchema.safeParse(configs);

if (!parseResult.success) {
  console.log(parseResult.error);
  process.exit(1);
}

const { port, pgHost, pgPort, pgDatabase, pgUser, pgPassword, jwtSecret } =
  configs;

module.exports = {
  port,
  pgHost,
  pgPort,
  pgDatabase,
  pgUser,
  pgPassword,
  jwtSecret,
};
