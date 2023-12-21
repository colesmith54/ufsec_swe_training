const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) {
        this.users = data;
    },
};
const fsPromises = require("fs").promises;
const path = require("path");

const handleLogout = async (req, res) => {
    // On client side, we need to delete the cookie
    const cookies = req.cookies;
    if (!cookies?.jwt) {
        return res.sendStatus(204); // no content (success)
    }
    const refreshToken = cookies.jwt;

    // Is refreshToken in the database?
    const userFound = usersDB.users.find(
        (person) => person.refreshToken === refreshToken
    );
    if (!userFound) {
        res.clearCookie(
            "jwt",
            { httpOnly: true },
            { maxAge: 24 * 60 * 60 * 1000 }
        );
        return res.sendStatus(204);
    }

    // Remove refreshToken from database
    const otherUsers = usersDB.users.filter(
        (person) => person.refreshToken !== refreshToken
    );
    const currentUser = { ...userFound, refreshToken: "" };
    usersDB.setUsers([...otherUsers, currentUser]);

    await fsPromises.writeFile(
        path.join(__dirname, "..", "model", "users.json"),
        JSON.stringify(usersDB.users)
    );

    // in production, set secure to true and sameSite to "none"
    res.clearCookie("jwt", { httpOnly: true }, { maxAge: 24 * 60 * 60 * 1000 });
    res.sendStatus(204);
};

module.exports = { handleLogout };
