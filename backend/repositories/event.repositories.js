const db = require("../db/db");

const addNewEvent = async (eventId, name, workspaceId, description) => {
  const result = await db.query(
    `INSERT INTO events(id, name, workspace_id, description) VALUES ($1, $2, $3, $4) RETURNING id, name, workspace_id, description`,
    [eventId, name, workspaceId, description],
  );
  if (!result.rowCount) {
    throw new Error("failed to create event");
  }
  return result.rows[0];
};

module.exports = { addNewEvent };
