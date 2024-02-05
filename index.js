// Importing necessary modules
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")

// Array of questions to be asked during the inquirer prompt
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
    type: "input",
    name: "usage",
    message: "What is the Usage of your app?",
  },
  {
    type: "input",
    name: "contributing",
    message: "In addition to the guidelines listed in Contributor Covenant, do you have any contribution guidelines? Push enter if Not.",
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

// Function to write data to a file
function writeToFile(fileName, data) {
  const filePath = path.join(fileName)
  fs.writeFile(filePath, data, (err) =>
    err ? console.error(err) : console.log(`ReadMe generated! @:${filePath}`)
  );
}

// Main function to initialize the README generation process
function init() {
  console.log("Welcome To your ReadMe generator!")
  // Prompting the user with the questions array
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log("My ReadMe Info", answers)
      // Generating markdown content based on user answers
      const readMeData = generateMarkdown({ ...answers })
      // Writing generated data to a file
      writeToFile("GENERATED_README.md", readMeData)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Handle TTY error if needed
      } else {
        // Handle other errors if needed
      }
    });
}

// Calling the init function to start the README generation process
init();
