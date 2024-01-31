
const user = require( "../model/user.js")
const { hashPassword, compare_hashed_passwords } = require("../utils/hashing.js")
const { createToken } = require("../utils/tokens.js")

async function register(req, res) {
    try {
        const { username, password } = req.body;

        // check if the user name found
        const foundUser = await user.findOne({ where: { username } });
        if (foundUser) {
            return res.json({ message: "Esse usuário já foi registrado" });
        }

        // hashing the password
        const hashedPassword = await hashPassword(password);

        // execute the registration
        const newUser = await user.create({ username: username, password: hashedPassword });

        res.json({ message: "Usuário registrado com sucesso" });
    } catch (error) {

        res.status(500).json({ message: "Internal Server Error!!" });

    }
}

async function login(req, res) {
    try {

        const { username, password } = req.body;

        // check if user registered or not
        const registeredUser = await user.findOne({ where: { username } });
        if (!registeredUser) {
            return res.json({ message: "Dados inválidos!" });
        }

        // check password matching
        const is_matched = await compare_hashed_passwords(password, registeredUser.password);
        if (!is_matched) {
            return res.json({ message: "Dados inválidos!" });
        }

        // create token
        const token = createToken(registeredUser.id, username);

        return res.json({ message: "Usuário logado com sucesso", token });

    } catch (error) {

        res.status(500).json({ message: "Internal Server Error!!" });

    }
}

module.exports = {
    register,
    login,
  };