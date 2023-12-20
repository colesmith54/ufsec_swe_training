const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) {
        this.users = data;
    },
};
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) {
        return res.status(400).json({ message: "User and password required." });
    }

    const userFound = usersDB.users.find((person) => person.username === user);
    if (!userFound) return res.sendStatus(401); // unauthorized

    const match = await bcrypt.compare(pwd, userFound.password);
    if (match) {
        // where we would create a JWT
        res.json({ success: `User ${user} logged in.` });
    } else {
        res.sendStatus(401);
    }
};

module.exports = { handleLogin };
