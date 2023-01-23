import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });
