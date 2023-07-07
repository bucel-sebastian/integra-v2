const mysql = require("mysql");

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  connect() {
    this.connection.connect((error) => {
      if (error) {
        console.error(
          "A aparut o eroare la conectare la baza de date - ",
          error
        );
      } else {
        console.log("Conectat la baza de date MySQL");
      }
    });
  }

  disconnect() {
    this.connection.end((error) => {
      if (error) {
        console.error(
          "A aparut o eroare la deconectarea de la baza de date - ",
          error
        );
      } else {
        console.log("Deconectat de la baza de date MySQL");
      }
    });
  }
}

module.exports = Database;
