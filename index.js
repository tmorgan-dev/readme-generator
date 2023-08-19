// WHEN I enter contribution guidelines
// THEN this information is added to the sections of the README

// WHEN I choose a license for my application from a list of options
// THEN and a notice is added to the README that explains which license the application is covered under

const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is a description of your project?",
  },
  {
    type: "input",
    name: "install",
    message: "How do you install your app?",
  },
  {
    //is it possible to pass a link to an image of the app?
    type: "input",
    name: "usage",
    message: "What is the Usage of your app?",
  },
  {
    type: "input",
    name: "tests",
    message: "What testing was done for your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "No License"],
  }
];

function writeToFile(fileName, data) {
  const filePath = path.join(fileName)
    fs.writeFile(filePath, data, (err) =>
  err ? console.error(err) : console.log(`ReadMe generated! @:${filePath}`)
);
}

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
    } else {
    }
  });
}

init();
