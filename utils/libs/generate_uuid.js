const { v4: uuid } = require("uuid");

const args = process.argv;
const length = args[3];

Array.from({ length }, () => {
  return console.log(uuid());
});
