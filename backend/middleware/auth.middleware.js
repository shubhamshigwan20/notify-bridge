const bcrypt = require("bcrypt");
const db = require("../db/db");
const authMiddleware = (req, res, next) => {
  console.log("a71", req);
  try {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
      const err = new Error("x-api-key required");
      err.status = 400;
      throw err;
    } else {
      // const verifyKey = async () => {
      //   const [prefix, secret] = apiKey.replace("nb_live_", "").split(".");
      //   const results = await db.query(
      //     `SELECT * FROM api_keys WHERE prefix = $1`,
      //     [prefix],
      //   );
      //   if (!results.rowCount) {
      //     throw new Error();
      //   }
      //   const secret_hash = results.rows[0]?.secret_hash;
      //   const isValid = bcrypt.compareSync(secret, secret_hash);
      //   if (isValid) {
      //     next();
      //   } else {
      //     const err = new Error("invalid api key");
      //     err.status = 400;
      //     throw err;
      //   }
      // };
      // verifyKey();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authMiddleware;
