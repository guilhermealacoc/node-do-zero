const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qaul a segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    console.log(`A media é ${media}`);
    if (media < 5) {
      console.log("Aluno reprovado");
    } else {
      console.log("Parabéns você passou!!!");
    }
  })
  .catch((err) => console.log(err));
