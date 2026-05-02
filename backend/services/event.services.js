const { v4: uuid } = require("uuid");
const { addNewEvent } = require("../repositories/event.repositories");

const registerEventAndGetId = (name, description, workspaceId) => {
  const eventId = `evt + ${uuid()}`;
  await addNewEvent(eventId, name, workspaceId, description);
  return  eventId;
};

module.exports = { registerEventAndGetId };
