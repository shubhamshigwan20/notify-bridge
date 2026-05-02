const crypto = require("crypto");

function generateApiKey() {
  const prefix = crypto.randomBytes(6).toString("hex"); // 12 chars
  const secret = crypto.randomBytes(24).toString("hex"); // 48 chars

  const apiKey = `nb_live_${prefix}.${secret}`;

  return {
    apiKey,
    prefix,
    secret,
  };
}

module.export = { generateApiKey };
