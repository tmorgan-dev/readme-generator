function renderLicenseBadge(license) {
  if (license !== "No License") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-green.svg)`
  }
  return ""
}

function renderLicenseLink(license) {
  if (license === "No License") {
    return `No License`
  }
  if (license === "MIT") {
    return `* [License](https://opensource.org/license/mit/)`
  }
  if (license === "APACHE 2.0") {
    return `* [License](https://www.apache.org/licenses/LICENSE-2.0)`
  }
  if (license === "GPL 3.0") {
    return `* [License](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
  return ""
}

function renderLicenseSection(license) {
  if (license !== "No License") {
    return `This app was licensed under ${license} license`
  }
  return ""
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions?](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  ## Tests
  ${data.tests}
  ## Questions?
  Send me an email here ${data.email} or, click this link to access my GitHub profile https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
