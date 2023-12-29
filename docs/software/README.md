# Реалізація інформаційного та програмного забезпечення

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DBLabs
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `DBLabs` ;

-- -----------------------------------------------------
-- Schema DBLabs
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DBLabs` DEFAULT CHARACTER SET utf8 ;
USE `DBLabs` ;

-- -----------------------------------------------------
-- Table `DBLabs`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBLabs`.`Role` ;

CREATE TABLE IF NOT EXISTS `DBLabs`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBLabs`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBLabs`.`User` ;

CREATE TABLE IF NOT EXISTS `DBLabs`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `picture` MEDIUMBLOB NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_User_Role_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role`
    FOREIGN KEY (`Role_id`)
    REFERENCES `DBLabs`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBLabs`.`Quiz`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBLabs`.`Quiz` ;

CREATE TABLE IF NOT EXISTS `DBLabs`.`Quiz` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBLabs`.`Question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBLabs`.`Question` ;

CREATE TABLE IF NOT EXISTS `DBLabs`.`Question` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `number` INT UNSIGNED NOT NULL,
  `description` VARCHAR(100) NULL,
  `Quiz_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Question_Quiz1_idx` (`Quiz_id` ASC) VISIBLE,
  CONSTRAINT `fk_Question_Quiz1`
    FOREIGN KEY (`Quiz_id`)
    REFERENCES `DBLabs`.`Quiz` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBLabs`.`Answer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBLabs`.`Answer` ;

CREATE TABLE IF NOT EXISTS `DBLabs`.`Answer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(100) NULL,
  `option` VARCHAR(45) NULL,
  `file` MEDIUMBLOB NULL,
  `Question_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Answer_Question1_idx` (`Question_id` ASC) VISIBLE,
  CONSTRAINT `fk_Answer_Question1`
    FOREIGN KEY (`Question_id`)
    REFERENCES `DBLabs`.`Question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBLabs`.`Respondent`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBLabs`.`Respondent` ;

CREATE TABLE IF NOT EXISTS `DBLabs`.`Respondent` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `User_id` INT NOT NULL,
  `Answer_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Respondent_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Respondent_Answer1_idx` (`Answer_id` ASC) VISIBLE,
  CONSTRAINT `fk_Respondent_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `DBLabs`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Respondent_Answer1`
    FOREIGN KEY (`Answer_id`)
    REFERENCES `DBLabs`.`Answer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBLabs`.`Option`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBLabs`.`Option` ;

CREATE TABLE IF NOT EXISTS `DBLabs`.`Option` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NULL,
  `number` INT UNSIGNED NOT NULL,
  `Question_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Option_Question1_idx` (`Question_id` ASC) VISIBLE,
  CONSTRAINT `fk_Option_Question1`
    FOREIGN KEY (`Question_id`)
    REFERENCES `DBLabs`.`Question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DBLabs`.`SelectedOption`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `DBLabs`.`SelectedOption` ;

CREATE TABLE IF NOT EXISTS `DBLabs`.`SelectedOption` (
  `Answer_id` INT NOT NULL,
  `Option_id` INT NOT NULL,
  INDEX `fk_SelectedOption_Answer1_idx` (`Answer_id` ASC) VISIBLE,
  INDEX `fk_SelectedOption_Option1_idx` (`Option_id` ASC) VISIBLE,
  CONSTRAINT `fk_SelectedOption_Answer1`
    FOREIGN KEY (`Answer_id`)
    REFERENCES `DBLabs`.`Answer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SelectedOption_Option1`
    FOREIGN KEY (`Option_id`)
    REFERENCES `DBLabs`.`Option` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `DBLabs`.`Role`
-- -----------------------------------------------------
START TRANSACTION;
USE `DBLabs`;
INSERT INTO `DBLabs`.`Role` (`name`, `description`) VALUES ('Respondent', 'A user that taking a survey');
INSERT INTO `DBLabs`.`Role` (`name`, `description`) VALUES ('Editor', 'The user who edits the survey');
INSERT INTO `DBLabs`.`Role` (`name`, `description`) VALUES ('Admin', 'The user is the owner of the survey');

COMMIT;
```
# RESTfull сервіс для управління даними

### Файл програми:
```js
const express = require("express");
const userRouter = require("./routes/users");
const quizRouter = require("./routes/quiz");
const questRouter = require("./routes/question");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(userRouter);
app.use(quizRouter);
app.use(questRouter);
app.all("*", (req, res, next) => {
  next(`The URL does not exists`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```
### Доступ до бази даних:
```js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "dblabs",
  password: "0931060568",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    throw err;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;
```
# Реалізація CRUD:

### Контролер для користувачів:
```js
const db = require("../dataBase/connection");

exports.getUsers = (req, res) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) return next("error");
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM user WHERE id = ?", [id], (err, results) => {
    if (err) return next("error");
    res.json(results[0]);
  });
};
exports.addUser = (req, res, next) => {
  if (!req.body) return next("No form data found");

  const user = {
    id: req.body.id,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    nickname: req.body.nickname,
    email: req.body.email,
    picture: req.body.picture,
    Role_id: req.body.Role_id,
  };

  db.query("SELECT * FROM role WHERE id = ?", [user.Role_id], (err, result) => {
    if (err) return next("error");

    if (result.length === 0) {
      return next("Invalid Role_id.");
    }

    db.query("INSERT INTO user SET ?", user, (err, result) => {
      if (err) return next("error");

      res.status(200).json({
        status: "success",
        message: "User added",
      });
    });
  });
};

exports.updateUser = (req, res, next) => {
  const userId = req.params.id;

  if (!req.body) return next("No form data found");

  const updatedUser = {
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    nickname: req.body.nickname,
    email: req.body.email,
    picture: req.body.picture,
    Role_id: req.body.Role_id,
  };

  db.query(
    "SELECT * FROM role WHERE id = ?",
    [updatedUser.Role_id],
    (err, result) => {
      if (err) return next("error");

      if (result.length === 0) {
        return next("Invalid Role_id.");
      }

      db.query(
        "UPDATE user SET ? WHERE id = ?",
        [updatedUser, userId],
        (err, result) => {
          if (err) return next("error");

          if (result.affectedRows === 0) {
            return next("User not found.");
          }

          res.status(200).json({
            status: "success",
            message: "User updated",
          });
        }
      );
    }
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM user WHERE id = ?", [id], (err) => {
    if (err) return next("error");
    res.json({ message: "User deleted successfully" });
  });
};
```
### Маршрути для користувачів
```js
const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.route("/users").get(userController.getUsers);
router.route("/users/:id").get(userController.getById);
router.route("/users").post(userController.addUser);
router.route("/users/:id").put(userController.updateUser);
router.route("/users/:id").delete(userController.delete);

module.exports = router;
```
### Контролер для опитувань:
```js
const db = require("../dataBase/connection");

exports.getQuizes = (req, res) => {
  db.query("SELECT * FROM quiz", (err, results, fields) => {
    if (err) return next("error");
    res.json({ Questions: results.length, results: results });
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM quiz WHERE id = ?", [id], (err, results) => {
    if (err) return next("error");
    res.json(results[0]);
  });
};

exports.addQuiz = (req, res, next) => {
  if (!req.body) return next("No form data found");
  const quiz = {
    description: req.body.description,
    name: req.body.name,
  };
  db.query("INSERT INTO quiz SET ?", quiz, (err, result) => {
    if (err) return next("error");
    res.status(200).json({
      status: "success",
      message: "Quiz added",
    });
  });
};

exports.updateQuiz = (req, res, next) => {
  const quizId = req.params.id;

  if (!req.body) return next("No form data found");

  const updatedQuiz = {
    description: req.body.description,
    name: req.body.name,
  };
  db.query(
    "UPDATE quiz SET ? WHERE id = ?",
    [updatedQuiz, quizId],
    (err, result) => {
      if (err) return next("error");
      if (result.affectedRows === 0) {
        return next("Quiz not found.");
      }
      res.status(200).json({
        status: "success",
        message: "Quiz updated",
      });
    }
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM quiz WHERE id = ?", [id], (err) => {
    if (err) return next("error");
    res.json({ message: "Quiz deleted successfully" });
  });
};
```
### Маршрути для опитувань:
```js
const express = require("express");
const quizController = require("../controllers/quiz");
const router = express.Router();

router.route("/quiz").get(quizController.getQuizes);
router.route("/quiz/:id").get(quizController.getById);
router.route("/quiz").post(quizController.addQuiz);
router.route("/quiz/:id").put(quizController.updateQuiz);
router.route("/quiz/:id").delete(quizController.delete);

module.exports = router;
```
### Контролер для питань:
```js
const db = require("../dataBase/connection");

exports.getQuest = (req, res) => {
  db.query("SELECT * FROM question", (err, results) => {
    if (err) return next("error");
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM question WHERE id = ?", [id], (err, results) => {
    if (err) return next("error");
    res.json(results[0]);
  });
};

exports.addQuest = (req, res, next) => {
  if (!req.body) return next("No form data found");
  const quiz = {
    id: req.body.id,
    type: req.body.type,
    number: req.body.number,
    description: req.body.description,
    Quiz_id: req.body.Quiz_id,
  };

  db.query("INSERT INTO question SET ?", quiz, (err, result) => {
    if (err) return next("error");
    res.status(200).json({
      status: "success",
      message: "Question added",
    });
  });
};

exports.updateQuest = (req, res, next) => {
  const questId = req.params.id;

  if (!req.body) return next("No form data found");

  const updatedQuest = {
    id: req.body.id,
    type: req.body.type,
    number: req.body.number,
    description: req.body.description,
    Quiz_id: req.body.Quiz_id,
  };
  db.query(
    "UPDATE question SET ? WHERE id = ?",
    [updatedQuest, questId],
    (err, result) => {
      if (err) return next("error");
      if (result.affectedRows === 0) {
        return next("Question not found.");
      }
      res.status(200).json({
        status: "success",
        message: "Question updated",
      });
    }
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM question WHERE id = ?", [id], (err) => {
    if (err) return next("error");
    res.json({ message: "Question deleted successfully" });
  });
};
```
### Маршрути для питань:
```js
const express = require("express");
const questController = require("../controllers/question");
const router = express.Router();

router.route("/questions").get(questController.getQuest);
router.route("/questions/:id").get(questController.getById);
router.route("/questions").post(questController.addQuest);
router.route("/questions/:id").put(questController.updateQuest);
router.route("/questions/:id").delete(questController.delete);

module.exports = router;
```

