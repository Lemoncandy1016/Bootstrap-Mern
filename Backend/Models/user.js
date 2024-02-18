const crypto = require("crypto");
const mysql = require("mysql2");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { any } = require("../Helpers/Libraries/imageUpload");
const dotenv = require("dotenv")

dotenv.config({
    path:  '.env'
})



var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});



const User = {
  createUser: async function(userData) {
    return new Promise((resolve, reject) => {
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
  
        con.query(
          "SELECT COUNT(*) AS tableCount FROM information_schema.tables WHERE table_schema = 'test' AND table_name = 'users'",
          function(err, result) {
            if (err) throw err;
            const tableExists = result[0].tableCount === 1;
  
            if (!tableExists) {
              con.query(
                `CREATE TABLE test.users (
                  username VARCHAR(255),
                  photo VARCHAR(255),
                  email VARCHAR(255),
                  password VARCHAR(255),
                  role VARCHAR(255),
                  resetPasswordToken BOOLEAN,
                  resetPasswordExpire BOOLEAN,
                  createdAt DATE,
                  updatedAt DATE
                )`,
                function(err) {
                  if (err) throw err;
                  console.log("Table 'users' created");
                  insertUserData(userData);
                }
              );
            } else {
              insertUserData(userData);
            }
          }
        );
  
        function insertUserData(userData) {
          var sql =
            "INSERT INTO users (username, photo, email, password, role, resetPasswordToken, resetPasswordExpire, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  
          var values = [
            userData.username,
            userData.photo || "user.png",
            userData.email,
            userData.password,
            userData.role || "user",
            userData.resetPasswordToken || null,
            userData.resetPasswordExpire || null,
            new Date(),
            new Date(),
          ];
  
          con.query(sql, values, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
  
            // Create the object with username, email, and password
            const userObject = {
              username: userData.username,
              email: userData.email,
              password: userData.password,
            };
  
            resolve(userObject);
          });
        }
      });
    });
  },

  getUserByEmail: async function (email) {
    const connection = await pool.getConnection();

    try {
      const [results] = await connection.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

      return results[0];
    } catch (error) {
      console.error("MySQL Error:", error);
      throw error;
    } finally {
      connection.release();
    }
  },

  updateUserPassword: async function (userId, newPassword) {
    const connection = await pool.getConnection();

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      await connection.execute(
        "UPDATE users SET password = ? WHERE id = ?",
        [hashedPassword, userId]
      );
    } catch (error) {
      console.error("MySQL Error:", error);
      throw error;
    } finally {
      connection.release();
    }
  },

   generateJwtFromUser : async function (user) {
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;
  
    const payload = {
      // id: this.id, // Assuming the primary key is named 'id' in your MySQL table
      username: user.username,
      email: user.email,
    };
    
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRE });
    
    return token;
  },
  
   getResetPasswordTokenFromUser : async function () {
    const { RESET_PASSWORD_EXPIRE } = process.env;
  
    const randomHexString = crypto.randomBytes(20).toString("hex");
  
    const resetPasswordToken = crypto
      .createHash("SHA256")
      .update(randomHexString)
      .digest("hex");
  
    this.resetPasswordToken = resetPasswordToken;
    this.resetPasswordExpire = new Date(
      Date.now() + parseInt(RESET_PASSWORD_EXPIRE)
    );
  
    return resetPasswordToken;
  }


};

module.exports = User;
