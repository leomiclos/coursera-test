const bcrypt = require('bcrypt')
const dotenv = require("dotenv")

dotenv.config();

async function hashPassword(password) {
    try {
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}

async function compare_hashed_passwords(passwordInput, storedHashedPassword) {
    try {
        return await bcrypt.compare(passwordInput, storedHashedPassword);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    hashPassword: hashPassword,
    compare_hashed_passwords: compare_hashed_passwords
}
