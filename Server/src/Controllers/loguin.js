const users = require("../Utils/users");

const loguin = (req, res) => {
  const { email, password } = req.query;
  const searchUsers = users.find(
    (user) => user.email === email && user.password === password
  );
  return searchUsers
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });
};

module.exports = {
  loguin,
};
