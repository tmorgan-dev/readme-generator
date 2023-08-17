// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and 
    //sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, 
    //Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, 
    //and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, 
    //Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the 
    //section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to 
    //reach me with additional questions
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
    //create a way to pass a link to an image of the app
    type: "input",
    name: "usage",
    message: "What is the Usage of your app?",
  },
  // {
  //   type: "input",
  //   name: "contributors",
  //   message: "Who contributed to your project?",
  // },
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
