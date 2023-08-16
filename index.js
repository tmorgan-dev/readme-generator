// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const filePath = path.join(fileName)
    fs.writeFile(filePath, data, (err) =>
  err ? console.error(err) : console.log(`ReadMe generated! @:${filePath}`)
);
}

// TODO: Create a function to initialize app
function init() {
  console.log("Welcome To your ReadMe generator!")
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("My ReadMe Info",answers)
    const readMeData = generateMarkdown({...answers})
    writeToFile("README.md", readMeData)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
