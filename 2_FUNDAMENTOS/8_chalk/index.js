const chalk = require("chalk");

const nota = 2;

console.log(chalk.green("Parabéns você foi aprovado!!!"));

if (nota >= 7) {
  console.log(chalk.green("Parabéns! Você está aprovado!"));
} else {
  console.log(chalk.bgRed.black("Você precisa fazer a prova de recuperação!"));
}
