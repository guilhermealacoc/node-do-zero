const inquirer = require("inquirer");
const chalk = require("chalk");

try {
  inquirer
    .prompt([
      {
        name: "p1",
        message: "Qual seu nome?",
      },
      {
        name: "p2",
        message: "Qual sua idade?",
      },
    ])
    .then((answers) => {
      console.log(chalk.bgYellow.black(answers.p1));
      console.log(chalk.bgYellow.black(answers.p2));
    })
    .catch((err) => console.log(err));
} catch (err) {
  console.log(`Erro: ${err}`);
}
